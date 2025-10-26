export default function Home() {
  return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4 m-0 p-0">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-12">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 text-center">
          Welcome to InsightBot
        </h1>
        <p className="text-gray-700 mb-10 leading-relaxed text-center text-lg">
          InsightBot ek news extraction platform hai jo different languages (English, Arabic,
          Russian) ke articles fetch karke clean data show karta hai.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/articles"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 
                       transition-colors duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            View Articles
          </a>
          <a
            href="/dashboard"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-700 
                       transition-colors duration-300 text-center focus:outline-none focus:ring-4 focus:ring-green-400"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
