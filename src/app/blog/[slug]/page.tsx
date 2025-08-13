// app/blog/[slug]/page.tsx
interface BlogPageProps {
  params: { slug: string | string[] };
}

export default function BlogPage({ params }: BlogPageProps) {
  // Ensure slug is always a string
  const slug = Array.isArray(params.slug) ? params.slug.join("-") : params.slug;
  const formattedTitle = slug.replace(/-/g, " ");

  return (
    <main className="bg-black text-white ">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
          {formattedTitle}
        </h1>
        <p className="text-gray-400 mb-8">
          Posted on August 12, 2025 • 5 min read
        </p>
        <div className="h-64 bg-gray-800 rounded-lg mb-8"></div>
        <article className="prose prose-invert max-w-none">
          <p>
            Welcome to our blog! This is a detailed article about{" "}
            {formattedTitle}. Here we share tips, insights, and guides to help
            you get the best experience possible.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl at vehicula tincidunt, nunc nulla facilisis
            sapien, eu tincidunt felis sapien et est.
          </p>
          <h2>Why it matters</h2>
          <p>
            In hac habitasse platea dictumst. Sed nec elit vel libero fermentum
            efficitur. Suspendisse potenti. Integer dapibus nunc sit amet erat
            vehicula, ut malesuada purus volutpat.
          </p>
        </article>
      </div>
    </main>
  );
}
