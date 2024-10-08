import BlogCard from "@/components/blog-card";
import Section from "@/components/section";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogSection() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .slice(0, 6),
  );

  return (
    <Section title="Blog" subtitle="Latest Articles">
      <div className="grid h-fit grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((data, idx) => (
          <BlogCard key={data.slug} data={data} priority={idx <= 1} />
        ))}
      </div>
    </Section>
  );
}
