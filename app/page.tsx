import React from "react";
import Home from "./components/Home";
import { getDetails, getData, url } from "./utils";


export default async function HomePage() {
  const data = await getData(url);
  const details = await getDetails(data);
  return (
    <main className="flex py-6 min-h-screen flex-col items-center justify-between">

      <Home details={details} />

    </main >
  )
}
