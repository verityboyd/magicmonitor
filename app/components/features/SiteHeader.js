//site header to be wrapped in root layout
//display user.name in the right hand side next to log out utton
"use client";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function SiteHeader() {
  const { user } = useUserAuth();
  return (
    <nav className="flex flex-row items-center justify-between py-5 text-lg border-b-2 border-[#C7B9FF] shadow-md">
      <div className="flex flex-row items-center px-10">Magic Monitor</div>
      <div className="flex flex-row items-center gap-4 px-10">
        <div>Home</div>
        <div>Parks</div>
        {user ? <div>Hello, {user.displayName}</div> : <div>Log In </div>}
      </div>
    </nav>
  );
}
