import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";

const Movie = ({ item }) => {
  return (
    <div className="text-white rounded-3xl h-80 hover:scale-95 shadow-2xl bg-gray-950">
      <Link href={`/SingleMovie/${item.id}`}>
        <div className='w-full h-[150px] rounded-t-3xl object-cover relative'>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            item.backdrop_path || item.poster_path
          }`}
          alt={item.original_name || item.original_title}
          fill
          className="rounded-t-3xl w-full h-full group-hover:opacity-75 transition-opacity duration-300 object-cover"
        />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold truncate uppercase">
            {item.title || item.name}
          </h2>
          <p className="line-clamp-2 text-gray-200">{item.overview}</p>

          <div className="flex items-center mt-5 justify-between">
            <span className="text-gray-500">
              {item.release_date || item.first_air_date}
            </span>

            <div className="flex items-center gap-2">
              <FiThumbsUp className="h-5 text-emerald-500" />
              {item.vote_count}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
