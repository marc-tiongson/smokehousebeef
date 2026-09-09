import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Top Ten BBQ Smokers Under $300 | Smokehouse Pit Beef",
  description:
    "The best bbq smoker must have high quality, good value, and reasonable price. Every person who wants to buy a BBQ smoker should know some basic points so they can pick the best bbq smoker under $300 for their specific needs.",
};

export default function Page() {
  const article = getArticleBySlug("the-top-ten-bbq-smokers-under-300");
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
