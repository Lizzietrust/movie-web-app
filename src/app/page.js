import AllMovies from "@/components/AllMovies";
import Categories from "@/components/Categories";
import Image from "next/image";


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;
  console.log('RES:', results);

  return (
    <div className="mt-32 w-[90%] mx-auto pb-20">
      <Categories />
      <AllMovies data={results} />
    </div>
  );
}
 