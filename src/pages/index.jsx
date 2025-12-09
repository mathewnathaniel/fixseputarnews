// src/pages/Home.jsx
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
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Berita Terbaru</h2>

    {data.length ? (
      data.map((item, i) => <NewsCard key={i} item={item} index={i} data={data} />)
    ) : (
      <div>Tidak ada data</div>
      )}
    </div>
  );
}
