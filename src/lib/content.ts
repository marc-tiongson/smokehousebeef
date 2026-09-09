import fs from "fs";
import path from "path";
import matter from "gray-matter";
import categoriesData from "../../content/categories.json";

export type Category = { slug: string; name: string; icon: string };

export type RecipeFrontmatter = {
  title: string;
  slug: string;
  date: string;
  category: string;
  image: string;
  imageAlt?: string;
  metaDescription?: string;
};

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  metaDescription?: string;
};

const RECIPES_DIR = path.join(process.cwd(), "content", "recipes");
const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readMdxDir<T>(dir: string): { frontmatter: T; content: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { frontmatter: data as T, content };
    });
}

export function getAllRecipes(): { frontmatter: RecipeFrontmatter; content: string }[] {
  return readMdxDir<RecipeFrontmatter>(RECIPES_DIR).sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getRecipeBySlug(slug: string) {
  return getAllRecipes().find((r) => r.frontmatter.slug === slug);
}

export function getRecipesByCategory(categorySlug: string) {
  return getAllRecipes().filter((r) => r.frontmatter.category === categorySlug);
}

export function getAllArticles(): { frontmatter: ArticleFrontmatter; content: string }[] {
  return readMdxDir<ArticleFrontmatter>(ARTICLES_DIR);
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((a) => a.frontmatter.slug === slug);
}

export function getAllCategories(): Category[] {
  return categoriesData;
}

export function getCategory(slug: string): Category | undefined {
  return categoriesData.find((c) => c.slug === slug);
}

export function getLatestRecipe() {
  return getAllRecipes()[0];
}
