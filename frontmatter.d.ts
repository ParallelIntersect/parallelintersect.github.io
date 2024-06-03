// frontmatter.d.ts
declare module 'frontmatter' {
    interface Frontmatter {
        title: string;
        description: string;
        category: string;
        tags: string[];
        thumbnail: string;
        slug: string;
    }
}