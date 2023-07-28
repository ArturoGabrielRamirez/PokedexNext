"use client";

import SigninButton from "./SigninButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Appbar = () => {
    const { data: session } = useSession()

    console.log(session)
    let sessionBool = session && session.user ? true : false



    return (

        <header className="flex overflow-hidden">

            <div className="w-6/12 h-[160px] bg-red-700 relative">
                <div className="flex w-full p-5">
                    <div className="flex justify-between w-full -right-[32px] ">
                        {sessionBool
                            ? (session && session.user) &&
                            <div className="m-3 border-2 border-black outline-8 outline outline-white rounded-full">
                                
                                <Image className="light-blue rounded-full shadow-xl shadow-[#67b8f9] bg-[#67b8f9]  p-[4px]" src={session.user.image as string} alt="pokeball" width={100} height={100} />
                                
                            </div>
                            :
                            <div className="m-3 border-2 border-black outline-8 outline outline-white rounded-full">
                                <Image className="rounded-full bg-[#569bd2]  p-[4px]" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png" alt="pokeball" width={100} height={100} />
                            </div>}
                        {!sessionBool
                            ? <div >
                                <div className="flex gap-4 flex-col md:flex-row" >
                                    <div className="light-red w-[16px] h-[16px] border-red-800 border-[4px] bg-red-800 md:w-[32px] md:h-[32px] rounded-full"></div>
                                    <div className="w-[16px] h-[16px] border-yellow-800 border-[4px] bg-yellow-800 grayscale-[30%] md:w-[32px] md:h-[32px] rounded-full"></div>
                                    <div className="w-[16px] h-[16px] border-green-800 border-[4px] bg-green-800  grayscale-[30%] md:w-[32px] md:h-[32px] rounded-full"></div>
                                </div>

                            </div>
                            : <div className="flex gap-4 flex-col md:flex-row" >
                                <div className="w-[16px] h-[16px] light-red border-red-800 border-[4px] bg-red-800 md:w-[32px] md:h-[32px] rounded-full"></div>
                                <div className="w-[16px] h-[16px] light-yellow border-yellow-800 border-[4px] bg-yellow-800 md:w-[32px] md:h-[32px] rounded-full"></div>
                                <div className="w-[16px] h-[16px] light-green border-green-800 border-[4px] bg-green-800 md:w-[32px] md:h-[32px] rounded-full"></div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="flex-col w-6/12 h-50">
                <div className="h-1/2 bg-red-700">
                    <div className=" absolute p-2 right-3 top-3">
                        <SigninButton />
                    </div>
                </div>
                <div className="h-1/2 relative ">
                    <div className="h-32 absolute w-[400px] bottom-[31px] -left-[24px] -z-10 bg-red-700 -rotate-[14deg] "></div>
                </div>
            </div>




        </header>
    )
}

export default Appbar;