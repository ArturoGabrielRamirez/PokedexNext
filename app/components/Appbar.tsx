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

            <div className="w-5/12 h-[160px] bg-red-700 relative  rounded-b-lg ">
                <div className="flex w-full p-5">
                    <div className="flex justify-between w-full -right-[32px] ">
                        {sessionBool ? (session && session.user) && <Image className=" rounded-full border-8  border-slate-400 " src={session.user.image as string} alt="pokeball" width={100} height={100} /> : <Image className=" rounded-full border-8 bg-slate-300 border-slate-400" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="pokeball" width={100} height={100} />}
                        {!sessionBool ? <div >
                            <div className="border-red-600 border-[4px] bg-red-500 md:w-[32px] md:h-[32px] rounded-full "></div>

                        </div>
                            : <div className="flex gap-4 flex-col md:flex-row" >
                                <div className="border-red-600 border-[4px] bg-red-500 md:w-[32px] md:h-[32px] rounded-full"></div>
                                <div className="border-yellow-600 border-[4px] bg-yellow-500 md:w-[32px] md:h-[32px] rounded-full"></div>
                                <div className="border-green-600 border-[4px] bg-green-500 md:w-[32px] md:h-[32px] rounded-full"></div></div>}
                    </div>
                </div>
            </div>

            <div className="flex-col w-7/12 h-50">
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