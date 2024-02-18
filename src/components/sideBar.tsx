import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
 
import {
  DialogTrigger,
} from "@/components/ui/dialog"

import { FaArrowRightToBracket } from "react-icons/fa6";
import { GraduationCap, Newspaper, School } from "lucide-react";
import { Link } from "react-router-dom";
import { CreateRoom } from "./CreateRoom/createRoom";
import { useState } from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"

export default function SideBar () {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="bg-blue-950 flex flex-col">
     <Sheet>
      <SheetTrigger className="text-zinc-200">
        <FaArrowRightToBracket className="font-bold text-xl m-2"/>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-blue-950 text-zinc-50 border-zinc-400" >
        <SheetHeader>
          <SheetTitle className="text-orange-400 font-[Honk] text-4xl">STUDYROOM</SheetTitle>
          <SheetDescription>

            <Command className="bg-blue-950 text-zinc-100 font-bold">
              <CommandInput placeholder="O que deseja procurar ?" />
              <CommandList>
                <CommandEmpty>Nenhum resultado</CommandEmpty>
                <CommandGroup heading="Salas">

                    <CommandItem className="flex gap-2 items-center">
                      <GraduationCap />
                      <Link className="flex" to={"/"}>
                        Visualizar salas
                      </Link>
                    </CommandItem>

                  <CommandItem className="flex gap-2">
                    <CreateRoom
                      isCreateRoomSideBar={true}
                      children={
                        <DialogTrigger className="flex flex-1 gap-2 items-center">
                          <School/>
                          Criar Salas
                        </DialogTrigger>
                      }
                    />
                  </CommandItem>

                  <CommandItem className="flex gap-2">
                    <Newspaper />
                    <Link to={"/reportData"}>Relatório das salas reservadas</Link>
                  </CommandItem>
                  
                </CommandGroup>
                <CommandGroup heading="Reservar horário nas salas">
                  <CommandItem className="flex gap-2 hover:bg-blue-950 hover:text-zinc-100">
                    <Collapsible
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      className="w-[350px] space-y-2"
                    >
                      <div className="flex items-center justify-between space-x-4 px-4">
                        <h4 className="text-sm font-semibold">
                          Escolher salas
                        </h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <CaretSortIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="space-y-2">
                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm hover:bg-orange-500 transition-all hover:text-zinc-900">
                          <Link className="flex" to={'/studyRoom'}>Sala 01</Link>
                        </div>
                        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm hover:bg-orange-500 transition-all hover:text-zinc-900">
                          Sala 02
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
  )
}
