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
          <SheetTitle className="text-orange-400">STUDYROOM</SheetTitle>
          <SheetDescription>

            <Command className="bg-blue-950 text-zinc-100 font-bold">
              <CommandInput placeholder="O que deseja procurar ?" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Salas">
                  <CommandItem>Visualizar salas</CommandItem>
                  <CommandItem>Criar Salas</CommandItem>
                  <CommandItem>Relatório das salas reservadas</CommandItem>
                  <CommandItem>Reservar horário</CommandItem>
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
