import Home from "./components/Home";

const getData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Home data={data} />
      </div>
    </main>
  )
}
