import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Drum Smoker Vs Offset Smoker | Smokehouse Pit Beef",
  description:
    "The best barbecue smoker is the one that you use. That's right, based on some pretty basic principles of physics and heat movement it's clear which type will work better for your needs- drum or offset?",
};

export default function Page() {
  const article = getArticleBySlug("drum-smoker-vs-offset-smoker");
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
