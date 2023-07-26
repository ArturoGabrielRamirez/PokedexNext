import React from "react";
import Home from "./components/Home";
import { getDetails, getData, url } from "./utils";


export default async function HomePage() {
  const data = await getData(url);
  const details = await getDetails(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Home details={details} />
      </div>
    </main>
  )
}
