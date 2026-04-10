"use client";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function SiteHeader() {
  const { user, logout } = useUserAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }
  return (
    <nav className="flex flex-row items-center justify-between py-5 text-lg border-b-2 border-[#C7B9FF] shadow-md">
      <div className="flex flex-row items-center px-10">Magic Monitor</div>
      <div className="flex flex-row items-center gap-4 px-10">
        <div>Home</div>
        <div>Parks</div>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              className="
    appearance-none 
    bg-transparent 
    border-none 
    shadow-none 
    hover:bg-transparent 
    focus:outline-none 
    focus-visible:outline-none 
    focus-visible:ring-0 
    focus-visible:ring-offset-0 
    focus-visible:shadow-none
  "
              asChild
            >
              <Button variant="ghost" className="text-lg cursor-pointer">
                Hello, {user.displayName}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-32 w-fit">
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-md" onClick={handleLogout}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="ghost"
            className="text-lg cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Log In{" "}
          </Button>
        )}
      </div>
    </nav>
  );
}
