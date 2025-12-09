import React from "react";

export default function NewsCard({ item }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {item.description || item.content || "Tidak ada deskripsi"}
          </p>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
          >
            Baca Selengkapnya
          </a>
        )}
      </div>
    </div>
  );
}
