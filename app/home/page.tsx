'use client'

import { useStoreCroma } from "@/store/config"

export default function HomePage() {
    const { user } = useStoreCroma()
    return (
        <div className="">
            <h1 className="text-3xl font-bold">Home Page</h1>
            <p className="text-lg">Welcome to the home page!</p>
            {user ? (
                <p className="text-green-600">Logged in as: {user.displayName}</p>
            ) : (
                <p className="text-red-600">Not logged in</p>
            )}
        </div>
    )
}