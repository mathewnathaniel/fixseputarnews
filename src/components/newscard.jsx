// src/components/NewsCard.jsx
import { Link } from "react-router-dom";

export default function NewsCard({ item, index, data }) {
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
        to={`/detail/${index}`}
        state={{ data }}
        className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Baca selengkapnya
      </Link>
    </div>
  );
}
