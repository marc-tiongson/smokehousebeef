import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Top Meats To Smoke With Cooking Tips | Smokehouse Pit Beef",
  description:
    "If you have second thoughts about what you will prepare for your weekend BBQ get-together, fret no more because we will give you some tips on what meat cuts are affordable, delicious, and juicy when cooked.",
};

export default function Page() {
  const article = getArticleBySlug("top-meats-to-smoke-with-cooking-tips");
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
