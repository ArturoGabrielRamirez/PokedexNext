import Link from "next/link"


export default async function Pagination({ searchParams, pages }: { searchParams: { [key: string]: any | string[] | undefined }, pages: any }) {


    const { page, prevPage } = pages

    const next = searchParams.next.substring(34)


    let prevPageURL = prevPage !== 0 ? `/?offset=${prevPage}&limit=20` : ""

    console.log(`prevPage ${prevPage}`)
    console.log(`next ${next}`);

return (

    <div className="flex gap-8">
        {
            prevPage !== -20
                ? <Link href={`/${prevPageURL}`}>{`Page-${page - 1}`}
                </Link>
                : <p></p>

        }
        <p>{page}</p>




        <Link href={`/${next}`}>{`Page-${page + 1}`}
        </Link>

    </div>

)
}












