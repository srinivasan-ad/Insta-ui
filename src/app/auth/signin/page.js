"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/app/components/Header";
import Image from "next/image";

function SignIn() {
    const [providers, setProviders] = useState({});
    useEffect(() => {
        async function getprovider() {
            const providers = await getProviders();
            setProviders(providers);
        }
        getprovider()
    }, []);
    /* 
    {
    google: {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/google',
      callbackUrl: 'http://localhost:3000/api/auth/callback/google'
    }
  }
    */
    return (
        <div>
            <Header />
            <div
                className="flex items-center justify-evenly flex-col min-h-[85vh]
      py-2 px-14 text-center"
            >  
        <div className='relative  h-80 w-80 cursor-pointer'>

               <Image src='https://links.papareact.com/ocw' fill 
               objectFit="contain"
         />
            </div>
                <p className="font-xs italic">
                    Warning: This is not a real app, this is only for educational purpose!{" "}
                    <br />
                    Tech Used: React, NextJs, Next-Auth, TailwindCSS, Firebase DB,
                    FakerJS, Recoil <br />
                    Project Credits: Aditya Srinivasan
                </p>
                <div className="">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="bg-blue-500 p-3 text-white rounded-lg"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SignIn;