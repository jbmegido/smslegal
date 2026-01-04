import type { CollectionEntry } from 'astro:content';

export type Section = CollectionEntry<'sections'>;

export function getBgColorClass(bgColor: 'primary' | 'alt' | 'dark'): string {
  const colorMap = {
    primary: 'bg-doc-bg-primary',
    alt: 'bg-doc-bg-alt',
    dark: 'bg-doc-bg-dark'
  };
  return colorMap[bgColor];
}

export function sortSections(sections: Section[]): Section[] {
  return sections.sort((a, b) => a.data.orden - b.data.orden);
}
