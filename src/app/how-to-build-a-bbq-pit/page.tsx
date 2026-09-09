import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "How To Build A BBQ Pit | Smokehouse Pit Beef",
  description:
    "Before you decide to build your BBQ pit, determine if it would be worth the time and effort. You must first understand what a BBQ pit is used for to do this.",
};

export default function Page() {
  const article = getArticleBySlug("how-to-build-a-bbq-pit");
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
