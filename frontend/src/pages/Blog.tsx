import img from "@/assets/blog.jpg"
const blogs = [
  {
    title: "How MissMinutes is Revolutionizing AI-Powered Interview Preparation",
    description:
      "Landing your dream job takes more than skills—it requires confidence and preparation. MissMinutes revolutionizes interview readiness ...",
    category: "Artificial Intelligence",
    date: "coming soon",
    image: img, // Replace with your image path
    link: "#",
  },
  
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 md:px-16 py-32">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-green-600">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p>Latest News</p>
        </div>
        <h1 className="text-4xl font-extrabold text-black mt-2 md:text-5xl">
          Our Blogs
        </h1>
        <p className="text-gray-500 text-lg mt-2">
          Stay informed with the latest insights and news from GenuiQLabs.
        </p>
      </div>

      {/* Blogs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            className="block rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-green-600 px-2 py-1 bg-green-100 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-black mt-3">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
