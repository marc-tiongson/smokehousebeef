import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getAllRecipes, getRecipeBySlug, getCategory } from "@/lib/content";

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  return {
    title: `${recipe.frontmatter.title} | Smokehouse Pit Beef`,
    description: recipe.frontmatter.metaDescription,
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const category = getCategory(recipe.frontmatter.category);

  return (
    <ArticleLayout
      title={recipe.frontmatter.title}
      image={recipe.frontmatter.image}
      imageAlt={recipe.frontmatter.imageAlt}
      date={recipe.frontmatter.date}
      categorySlug={category?.slug}
      categoryName={category?.name}
      body={recipe.content}
    />
  );
}
