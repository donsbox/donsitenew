import { getCollection, type CollectionEntry } from "astro:content";
import { languages, type Language } from "./i18n";

export type Project = CollectionEntry<"projects">;

// Every listing and detail route uses the same collection and translation rules.
export async function getProjects(lang: Language): Promise<Project[]> {
  const entries = await getCollection("projects");
  const groups = new Map<string, Project[]>();
  for (const entry of entries) {
    const group = groups.get(entry.data.projectId) ?? [];
    groups.set(entry.data.projectId, [...group, entry]);
  }
  for (const [id, translations] of groups) {
    if (languages.some(locale => translations.filter(entry => entry.data.lang === locale).length !== 1)) {
      throw new Error(`Project ${id} needs exactly one entry for each language.`);
    }
    const reference = translations[0].data;
    for (const { data } of translations) {
      for (const field of ["repository", "revision", "stage", "reviewedAt", "repositoryAccess", "order"] as const) {
        if (data[field] !== reference[field]) throw new Error(`Project ${id}: translations disagree on ${field}.`);
      }
      if (data.sources.map(source => source.path).join("\n") !== reference.sources.map(source => source.path).join("\n")) {
        throw new Error(`Project ${id}: translations disagree on source paths.`);
      }
    }
  }
  return entries.filter(entry => entry.data.lang === lang).sort((a, b) => a.data.order - b.data.order);
}

export function sourceUrl(project: Project, path?: string): string {
  const { repository, revision } = project.data;
  return path
    ? `${repository}/blob/${revision}/${path.split("/").map(encodeURIComponent).join("/")}`
    : `${repository}/tree/${revision}`;
}
