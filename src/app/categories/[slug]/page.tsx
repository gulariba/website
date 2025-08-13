// app/categories/[slug]/page.tsx
interface CategoryPageProps {
  params: { slug: string | string[] };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Ensure slug is always a string
  const slug = Array.isArray(params.slug) ? params.slug.join("-") : params.slug;
  const categoryName = slug.replace(/-/g, " ");

  return (
    <main className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
          {categoryName}
        </h1>
        <p className="text-gray-400 mb-12">
          Explore our curated collection of {categoryName} products.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-black border border-red-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-800 rounded-md mb-4"></div>
              <h3 className="text-lg font-semibold">{categoryName} Product {i}</h3>
              <p className="text-red-400 font-bold">$99.99</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
