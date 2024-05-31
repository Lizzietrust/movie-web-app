import AllMovies from "@/components/AllMovies";


export default async function SearchPage({ params }) {
  const searchTerm = params.SearchTerm;
  
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  console.log('SEA>>', searchTerm);
  console.log('PARAMS>>', params);
  return (
    <div className="mt-32 w-[90%] mx-auto pb-20">
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <AllMovies data={results} />}
    </div>
  );
}