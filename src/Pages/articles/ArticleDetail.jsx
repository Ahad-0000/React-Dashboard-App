import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.get(`/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(console.error);
  }, [id]);

  if (!article) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        {article.language} | {article.source} | {article.fetched_at}
      </p>
      <p className="mb-6 whitespace-pre-line">{article.body}</p>

      <div className="flex justify-between">
        <Link to="/articles" className="text-blue-600">← Back to Articles</Link>
        {article.url && (
          <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600">
            Open Original Source ↗
          </a>
        )}
      </div>
    </div>
  );
}
