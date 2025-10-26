import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [filterLang, setFilterLang] = useState("ALL");

  useEffect(() => {
    api.get("/articles")
      .then(res => setArticles(res.data))
      .catch(console.error);
  }, []);

  // filter logic
  const filteredArticles =
    filterLang === "ALL"
      ? articles
      : articles.filter(a => a.language === filterLang);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Articles</h2>

      {/* 🔹 Language Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Language:</label>
        <select
          value={filterLang}
          onChange={(e) => setFilterLang(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="ALL">All</option>
          <option value="EN">English</option>
          <option value="AR">Arabic</option>
          <option value="RU">Russian</option>
        </select>
      </div>

      {/* 🔹 Article List */}
      <div className="space-y-3">
        {filteredArticles.map((a) => (
          <div key={a.id} className="p-3 border rounded shadow">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-600">
              {a.language} | {a.source}
            </p>
            <p className="line-clamp-2">{a.body}</p>
            <Link to={`/articles/${a.id}`} className="text-blue-600">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
