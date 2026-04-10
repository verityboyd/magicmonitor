"use client";
import LogIn from "../components/features/auth/SignUp";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex flex-row w-full min-h-screen justify-center items-center">
      <div className="flex items-center">
        <div>
          <div className="text-2xl font-bold text-center pb-3">
            Welcome Back
          </div>
          <LogIn />
          <div className="flex flex-col items-center py-5">
            <div className="flex flex-row">
              Don&apos;t have an account?
              <button
                onClick={() => router.push("/signup")}
                className="font-bold hover:underline pl-1"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
