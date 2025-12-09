import { useLocation, useParams } from "react-router-dom";

export default function Detail() {
  const { index } = useParams();
  const location = useLocation();
  const data = location.state?.data || [];
  const news = data[index];

  if (!news) return <div className="p-4">Berita tidak ditemukan</div>;

  const date = news.pubDate ? new Date(news.pubDate).toLocaleDateString("id-ID") : "";

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${news.image_url || "https://source.unsplash.com/1200x600/?news"})`,
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded max-w-3xl shadow-lg overflow-y-auto max-h-[90vh]">
        <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
        {news.creator && (
          <p className="text-sm text-gray-600 mb-2">
            By {news.creator.join(", ")} | {date}
          </p>
        )}
        <p className="text-gray-700 mb-4">{news.content || news.description}</p>
        <div className="flex gap-4">
          {news.link && (
            <a
              href={news.link}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Baca Sumber
            </a>
          )}
          <button
            onClick={() => navigator.share && navigator.share({
              title: news.title,
              url: news.link,
            })}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
