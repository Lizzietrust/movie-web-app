import Image from "next/image";

export default async function SingleMovie({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  console.log("MOVIE:", movie);

  return (
    <div className="w-[90%] mx-auto text-white mt-32 pb-20">
      <div className="p-y md:pt-8 flex flex-col md:flex-row content-center w-full mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.name || movie.title}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>

      <div
        className={`${
          movie.status === "Released" ? "bg-emerald-500" : "bg-orange-700"
        } text-white w-32 absolute top-36 right-[5%] h-10 flex items-center justify-center rounded-xl`}
      >
        {movie.status}
      </div>

      {movie.production_companies.length > 0 && (
        <div className="text-white pt-10">
          <h3 className="text-2xl pb-7 text-center font-semibold">
            Production Companies:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {movie.production_companies.map((pc, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-slate-700 rounded-full"
              >
                <div className="w-[70px] h-[70px] shadow-xl relative object-cover">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${pc.logo_path}`}
                    alt={pc.name}
                    fill
                    className="rounded-full border border-white object-cover"
                  />
                </div>

                <div className="flex items-center justify-center flex-col">
                  <p className="text-sm">{pc.name}</p>
                  <span>{pc.origin_country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
