import React, { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/newscard";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await getNews("top"); 
        setData(res.results || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">Error: {error.message}</div>;

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Berita Terbaru</h2>
      {data.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </div>
      ) : (
        <div>Tidak ada data berita</div>
      )}
    </div>
  );
}
