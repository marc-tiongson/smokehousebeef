import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Best Drum Smoker Kits For BBQ: The Top 10 Reviewed | Smokehouse Pit Beef",
  description:
    "With their high-quality materials, these drum smokers are made to last. You can use them for all sorts of things from barbecue to camping.",
};

export default function Page() {
  const article = getArticleBySlug("the-best-drum-smoker-kits-for-bbq-the-top-10-reviewed");
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
