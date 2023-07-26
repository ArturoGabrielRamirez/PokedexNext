'use client';
import Image from 'next/image'



function Home({ details }: { details: any }) {
    console.log(details)

    return (
        <section className='container grid gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-4'>
            {
                details.map((item: any) => {
                    return (
                        <div  key={item.id} className='card'>
                            <div className='flex relative rotate-cards-animation'>

                                <div className='absolute w-full h-full border-8 border-yellow-200 rounded-md bg-gradient-to-b from-orange-500 shadow-md back -z-10'>
                                    <div >
                                        
                                    </div>
                                    <div className='w-full h-full bg-gradient-to-t from-orange-600'>
                                        <div />
                                        <div />
                                    </div>
                                </div>

                                <div className='border-8 border-yellow-200 rounded-md bg-gradient-to-b from-orange-500 shadow-md front'>
                                    <div>
                                        <div className='border-2 border-amber-300 m-2 rounded-sm bg-gradient-to-t from-orange-200' >
                                            <Image src={item.sprites.front_default} alt={item.name} width={200} height={200} />
                                        </div>
                                        <div className='bg-gradient-to-t from-orange-600'>
                                            <h1 className='text-center text-2xl font-bold'>{item.name}</h1>
                                            <div className='text-center border-2 rounded-full'>Height: {item.height}</div>
                                            <div className='text-center'>Weight: {item.weight}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })

            }

        </section>

    )
}
export default Home