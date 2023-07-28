'use client';
import Image from 'next/image'
import ChipsTypes from './ChipsTypes';
import { typesColorCards } from '../utils';


function Home({ details }: { details: any }) {
    console.log(details)
    return (
        <section className='container grid gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-4'>
            {
                details.map((item: any,) => {
                    let color = typesColorCards[item.types[0].type.name]

                    return (
                        <div key={item.id} className='card group max-w-[247px]'>
                            <div className='flex relative rotate-cards-animation w-full h-full'>

                                <div className={`flex flex-col  h-full w-full border-8 border-yellow-200 rounded-md bg-gradient-to-b ${color} shadow-sm shadow-yellow-500 front`} >

                                    <div className={`flex m-2 border-2 border-amber-300 rounded-sm bg-gradient-to-b justify-center ${color} shadow-sm shadow-amber-400`} >
                                        <Image src={item.sprites.front_default} alt={item.name} width={200} height={200} />
                                    </div>
                                    <div className={`p-2 grow bg-gradient-to-t ${color}`}>
                                        <h1 className='text-center text-2xl font-bold'>{item.name}</h1>
                                        <div className='text-center border-2 rounded-full'>Height: {item.height}</div>
                                        <div><ChipsTypes item={item} /></div>
                                        <div className='text-center'>Weight: {item.weight}</div>
                                    </div>
                                </div>

                                <div className={` absolute w-full h-full border-8 border-yellow-200 rounded-md bg-gradient-to-b ${color} shadow-sm shadow-yellow-500 back -z-10`}>

                                    <div className={`flex items-center justify-center w-full h-full bg-gradient-to-t ${color}`}>
                                        <div className='relative flex flex-col justify-center items-center group-hover:animate-bounce'>
                                            <div className='bg-red-700 w-32 h-16 border-black text-white font-bold  border-4 rounded-t-full'>
                                            </div>
                                            <div className='absolute bg-white z-10 rounded-full border-black border-4 w-10 h-10 font-bold'></div>
                                            <div className='border-black text-black bg-white font-bold w-32 h-16 border-4 rounded-b-full' />
                                            <div />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })

            }

        </section >

    )
}
export default Home