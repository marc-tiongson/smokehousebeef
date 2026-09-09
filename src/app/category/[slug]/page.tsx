import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllCategories, getCategory, getRecipesByCategory } from "@/lib/content";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Recipes | Smokehouse Pit Beef`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const recipes = getRecipesByCategory(slug);

  return (
    <div
      data-elementor-type="archive"
      data-elementor-id="741"
      className="elementor elementor-741 elementor-location-archive"
    >
      <section className="elementor-section elementor-top-section elementor-element elementor-element-74e8a83 elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-95dd91a">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Image src={category.icon} alt={category.name} width={150} height={150} />
                </div>
              </div>
              <div className="elementor-element elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {category.name}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-posts--align-center elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts">
                <div className="elementor-widget-container">
                  <div
                    className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid"
                    role="list"
                  >
                    {recipes.map((r) => (
                      <article
                        key={r.frontmatter.slug}
                        className="elementor-post elementor-grid-item"
                        role="listitem"
                      >
                        <div className="elementor-post__card">
                          <Link
                            className="elementor-post__thumbnail__link"
                            href={`/recipe/${r.frontmatter.slug}/`}
                            tabIndex={-1}
                          >
                            <div className="elementor-post__thumbnail">
                              <Image
                                src={r.frontmatter.image}
                                alt=""
                                width={900}
                                height={900}
                              />
                            </div>
                          </Link>
                          <div className="elementor-post__text">
                            <h3 className="elementor-post__title">
                              <Link href={`/recipe/${r.frontmatter.slug}/`}>
                                {r.frontmatter.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  {recipes.length === 0 && <p>No recipes in this category yet.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
