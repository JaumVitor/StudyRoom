import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '../ui/button'
import { PlusCircle } from 'lucide-react'
import { Input } from '../ui/input'
import { Toaster } from '../ui/sonner'

export function CreateSchedule() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
          <PlusCircle className="w-4 h-4" />
          <p>Agendar Horário </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Realizar reserva de horário na sala</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-2">
              <Input type="name" placeholder="Nome" />
              <Input type="name" placeholder="Matricula" />
              {/* Selecionar horários disponiveis */}
              <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                <PlusCircle className="w-4 h-4" />
                <p>Agendar</p>
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <Toaster />
    </Dialog>
  )
}
