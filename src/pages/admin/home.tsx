import { BoxInfo } from "@/components/BoxInfo/BoxInfo";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { PlusCircle } from "lucide-react";


export function Home () {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Salas criadas</h1>
      {/* Caso vazio colocar mensagem */}
      
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <Dialog>
          <DialogTrigger className="bg-green-500 rounded-full w-10 h-10 flex justify-center items-center text-zinc-900">
            <PlusCircle className="w-full h-full text-zinc-100"/>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">Realizar reserva de horário na sala</DialogTitle>
              <DialogDescription>
                <form className="flex flex-col gap-2 my-4">
                  <Label>Nome da sala</Label>
                  <Input type="name" placeholder="Sala 01"/>

                  <Label>Digite o IP do equipamento</Label>
                  <Input type="name" placeholder="192.158.1.38"/>
                  {/* Pegar input e criar nova sala */}

                  {/* Selecionar horários disponiveis */}
                  <div className="mt-3 flex justify-between">
                    <Button variant="destructive" className="font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                      <p>Cancelar</p>
                    </Button>

                    <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                      <PlusCircle className="w-4 h-4"/>
                      <p>Agendar</p>
                    </Button>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}