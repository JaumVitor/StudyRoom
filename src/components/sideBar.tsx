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
import { AlarmClockPlus, GraduationCap, Newspaper, School } from "lucide-react";

export default function SideBar () {
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

                  <CommandItem className="flex gap-2">
                    <GraduationCap/>
                    Visualizar salas
                  </CommandItem>

                  <CommandItem className="flex gap-2">
                    <School/>
                    Criar Salas
                  </CommandItem>

                  <CommandItem className="flex gap-2">
                    <Newspaper />
                    Relatório das salas reservadas
                  </CommandItem>
                  
                  <CommandItem className="flex gap-2">
                    <AlarmClockPlus />
                    Reservar horário
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
