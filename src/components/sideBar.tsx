import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { FaArrowRightToBracket } from "react-icons/fa6";

export default function SideBar () {
  return (
    <div className="bg-blue-950 flex flex-col">
     <Sheet>
      <SheetTrigger className="text-zinc-200">
        <FaArrowRightToBracket className="font-bold text-xl m-2"/>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-blue-950 text-zinc-50 border-zinc-400" >
        <SheetHeader>
          <SheetTitle className="text-zinc-50">STUDYROOM</SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
  )
}
