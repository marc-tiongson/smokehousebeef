import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grill Vs Barbeque: The Essential Guide | Smokehouse Pit Beef",
  description:
    "People often get confused about this one. It is not uncommon to use the terms grilling and barbecuing interchangeably.",
};

export default function Page() {
  const article = getArticleBySlug("grill-vs-barbeque-the-essential-guide");
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
