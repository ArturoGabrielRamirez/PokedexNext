'use client';
import Image from 'next/image'


function Home({ details }: { details: any }) {
    console.log(details)

    return (
        <section>
            {
                details.map((item: any) => {
                    return (<div key={item.id}>

                        <Image src={item.sprites.front_default} alt={item.name} width={200} height={200} />
                    </div>)
                })
            }
        </section>

    )
}
export default Home