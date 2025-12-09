// src/components/NewsCard.jsx
import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  return (
    <div className="border rounded-lg p-3 shadow-sm bg-white">
      {item.image_url && (
        <img
          src={item.image_url}
          alt=""
          className="w-full h-48 object-cover rounded-md mb-2"
        />
      )}

      <h3 className="font-semibold text-lg">{item.title}</h3>

      <p className="text-gray-600 text-sm line-clamp-3">
        {item.description}
      </p>

      <Link
        to={`/detail/${item.article_id}`}
        className="text-blue-600 text-sm underline"
      >
        Baca selengkapnya
      </Link>
    </div>
  );
}
