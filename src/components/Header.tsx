import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Home } from "lucide-react"

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { Button } from "./ui/button"
import { Link } from "react-router-dom"

import { AuthUserContext } from "@/contexts/auth"
import { useContext } from "react"

export function Header () {
  const { user } = useContext(AuthUserContext)
  return (
    <>
      <header className="bg-white bg-opacity-35 shadow-lg rounded-lg border border-zinc-400 border-opacity-20 backdrop-blur-md p-3 top-0 fixed mt-2 w-[90%] z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-zinc-900">{user?.name}</span>
          </div>

          <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-600 to-orange-500 animate-gradient-xy">STUDYROOM</h1>

          <div className="flex justify-center items-center">
            <Link to={'/'}>
              <Home className="w-6 h-6 hover:text-blue-700 cursor-pointer"/>
            </Link>
            
            <Button className="rounded hover:text-blue-700" variant={"link"}>
              <GitHubLogoIcon className="w-6 h-6"/>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}