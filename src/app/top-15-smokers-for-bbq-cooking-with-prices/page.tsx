import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Top 15 Smokers For BBQ Cooking With Prices | Smokehouse Pit Beef",
  description:
    "BBQing is a great way to enjoy good food, but it's not the only reason to smoke cigars. Smoking cigars for BBQ can be a great way to enjoy some of the best flavors and aromas in the world.",
};

export default function Page() {
  const article = getArticleBySlug("top-15-smokers-for-bbq-cooking-with-prices");
  if (!article) notFound();
  return (
    <ArticleLayout
      title={article.frontmatter.title}
      image={article.frontmatter.image}
      imageAlt={article.frontmatter.imageAlt}
      body={article.content}
    />
  );
}
