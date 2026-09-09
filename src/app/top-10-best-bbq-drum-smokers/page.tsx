import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Top 10 Best BBQ Drum Smokers | Smokehouse Pit Beef",
  description:
    "We would like to present the top 10 best BBQ drum smokers for backyard bbq fans. With today's gadgets, whether it be an iPhone or iPad, people are looking for ways to make their life easier.",
};

export default function Page() {
  const article = getArticleBySlug("top-10-best-bbq-drum-smokers");
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
