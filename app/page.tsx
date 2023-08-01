import React from "react";
import Home from "./components/Home";
import { getDetails, getData, url } from "./utils";


export default async function HomePage({ searchParams }: { searchParams: { [key: string]: any | string[] | undefined } }) {
  const offset = searchParams.offset ? searchParams.offset : 0
  const limit = searchParams.limit ? searchParams.limit : 20

  let prevPage = offset - limit;



  const page = offset / limit + 1;

  const pages = { page, prevPage }

  console.log(page);
  console.log(prevPage);
  /* console.log(page) */


  const data = await getData(`${url}?offset=${offset}&limit=${limit}`);
  const details = await getDetails(data);
  /*  console.log(searchParams) */


  return (
    <main className="flex py-6 flex-col items-center justify-center">
      <Home details={details} data={data} pages={pages} />
    </main >
  )
}
