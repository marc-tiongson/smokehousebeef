import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gateway Drum Smoker vs Pit Barrel Cooker | Smokehouse Pit Beef",
  description:
    "If you want to take your barbeque game to the next level, the Gateway Drum Smoker is an excellent choice. as a fully capable drum smoker.",
};

export default function Page() {
  const article = getArticleBySlug("gateway-drum-smoker-vs-pit-barrel-cooker");
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
