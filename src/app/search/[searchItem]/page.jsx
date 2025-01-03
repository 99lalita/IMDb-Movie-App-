import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const seachTerm = params.searchItem;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=true`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      {results &&
        results.length === 
          (<h1 className="text-center pt-6">No Results Found</h1>)}
      {results && <Results results={results} />}
    </div>
  );
}
