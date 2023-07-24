"use client";

import LoginForm from "@/components/LoginForm";
import UserList from "@/components/UserList";
import UserProfile from "@/components/UserProfile";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <main className="min-h-screen p-24">
      <h1>Home Page</h1>
      <button className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100">
        Click Me
      </button>
      <div className="my-10 flex flex-col gap-y-4">
        <label htmlFor="randomText">Enter Random Text: </label>
        <input
          id="randomText"
          className="border border-slate-500 py-3 rounded-lg"
        />
      </div>
      <div className="my-10 flex flex-col gap-y-4">
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input
          id="specificText"
          className="border border-slate-500 py-3 rounded-lg"
        />
      </div>
      <div className="my-10 flex flex-col gap-y-4">
        <input
          id="specificText"
          className="border border-slate-500 p-3 rounded-lg"
          placeholder="Search..."
        />
      </div>
      <div className="my-10 flex flex-col gap-y-4">
        <input
          className="border border-slate-500 p-3 rounded-lg"
          value="AUDI Q5"
        />
      </div>

      <div className="flex flex-col gap-y-5">
        {showText && <span className="inline-block">This is the text!</span>}
        <button
          onClick={() =>
            setTimeout(() => {
              setShowText(!showText);
            }, 1100)
          }
          className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100"
        >
          Show Text
        </button>
      </div>
      <UserProfile
        displayName={"subham the dev"}
        userName="subham"
        email="subham@gmail.com"
        isEmailVerified={false}
      />

      <div className="my-10">
        <UserList />
      </div>
      <div className="my-10">
        <LoginForm />
      </div>
    </main>
  );
}
