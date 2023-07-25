"use client";

import { signIn, signOut, useSession } from 'next-auth/react'

const SigninButton = () => {

    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div>

                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    return (
        <div>

            <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
}
export default SigninButton