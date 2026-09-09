import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RecipeCard from "@/components/RecipeCard";
import { getAllCategories, getCategory, getRecipesByCategory } from "@/lib/content";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Recipes | Smokehouse Pit Beef`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const recipes = getRecipesByCategory(slug);

  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>{category.name}</h1>
      <div className={styles.grid}>
        {recipes.map((r) => (
          <RecipeCard
            key={r.frontmatter.slug}
            slug={r.frontmatter.slug}
            title={r.frontmatter.title}
            image={r.frontmatter.image}
            imageAlt={r.frontmatter.imageAlt}
          />
        ))}
      </div>
      {recipes.length === 0 && <p>No recipes in this category yet.</p>}
    </div>
  );
}
