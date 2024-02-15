import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "sonner"

import { BoxInfo } from "@/components/BoxInfo/BoxInfo"

import { CalendarIcon } from "@radix-ui/react-icons"

import { Search, PlusCircle } from "lucide-react"

import { MdOutlineCameraAlt } from "react-icons/md";

export function StudyRoom () {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Horários reservados</h1>

      <div className="flex items-center justify-between mb-3">
        <form className="flex gap-2">
          <Input type="name" placeholder="Matricula"/>
          <Input type="name" placeholder="Status"/>
          
          <Button variant='link' className="flex gap-1">
            <Search className="w-4 h-4"/>Filtrar
          </Button>
        </form>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
              <PlusCircle className="w-4 h-4"/>
              <p>Agendar Horário </p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Realizar reserva de horário na sala</DialogTitle>
              <DialogDescription>
                <form className="flex flex-col gap-2">
                  <Input type="name" placeholder="Nome"/>
                  <Input type="name" placeholder="Matricula"/>

                  {/* Selecionar horários disponiveis */}
                  <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                    <PlusCircle className="w-4 h-4"/>
                    <p>Agendar</p>
                  </Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
          <Toaster />
        </Dialog>

      </div>
      <Toaster />
      <Table className="border mb-3">
        <TableHeader>
          <TableRow>
            <TableHead>Usuários</TableHead>
            <TableHead >
              <div className="flex gap-1 items-center">
                <CalendarIcon/>
                <p>Horário de inicio</p>
              </div>
            </TableHead>
            <TableHead >
              <div className="flex gap-1 items-center">
                <CalendarIcon/>
                <p>Horário Final</p>
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
          </TableRow>

        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium"><p>Maria Eduarda</p></TableCell>
            
            <TableCell>10:00</TableCell>
            <TableCell>11:00</TableCell>
            <TableCell className="font-bold text-red-700">Reserva expirada</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">João Vitor</TableCell>
            <TableCell>11:00</TableCell>
            <TableCell>13:00</TableCell>
            <TableCell className="font-bold text-orange-600">Em andamento</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jhonata Sousa</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell className="font-bold text-green-700">Agendado</TableCell>
          </TableRow>
        
        </TableBody>
      </Table>

      <Separator className="m-4"/>

      <h1 className="text-2xl font-bold">Informações da sala</h1>
      <div className="cursor-pointer border-dashed border-[2px] border-slate-500 rounded-md bg-slate-300 shadow-sm my-4 mx-auto aspect-video w-3/6 h-3/6 flex items-center justify-center flex-col ">
      
      <MdOutlineCameraAlt className="text-6xl opacity-50 text-slate-500"/>
      <p className="opacity-50">Câmera da sala</p>
      </div>
      
      <div className="flex">
        <BoxInfo 
          Title="Lampadas"
          Content="As lampadas estão ligadas"
        />
        <BoxInfo 
          Title="Nº Pessoas"
          Content="3 pessoas"
        />
        <BoxInfo 
          Title="Split"
          Content="O ar condicionado está ligado - Com temperatura de 21C"
        />
      </div>
    </>
  )
}