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

            <div className="flex-row relative w-5/12 h-40 bg-red-700 rounded-b-lg ">
                <div className="p-5 relative">
                    <div className="absolute flex w-64 -right-52 ">
                        {!sessionBool ? <div >
                            <div className="border-red-600 border-[4px] bg-red-500 w-8 h-8 rounded-full"></div>

                        </div>
                            : <div >
                                <div className="border-red-600 border-[4px] bg-red-500 w-8 h-8 rounded-full"></div>
                                <div className="border-yellow-600 border-[4px] bg-yellow-500 w-8 h-8 rounded-full"></div>
                                <div className="border-green-600 border-[4px] bg-green-500 w-8 h-8 rounded-full"></div></div>}
                    </div>
                    {sessionBool ? (session && session.user) && <Image className=" rounded-full border-8  border-slate-400" src={session.user.image as string} alt="pokeball" width={130} height={130} /> : <Image className=" rounded-full border-8 bg-slate-300  border-slate-400" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="pokeball" width={130} height={130} />}
                </div>
                <div className="h-3/4"></div>
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