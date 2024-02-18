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
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { FaCircle } from 'react-icons/fa6'

interface CreateScheduleProps {
  schedules: [
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string },
    { hourInit: string; hourEnd: string; status: string }
  ]
}

export function CreateSchedule({ schedules }: CreateScheduleProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
          <PlusCircle className="w-4 h-4" />
          Agendar Horário
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">
            Realizar reserva de horário na sala
          </DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-2">
              <Input className="mb-3" type="name" placeholder="Matricula" />
              
              <Label className="text-zinc-900">Horários disponiveis</Label>
              {/* Selecionar horários disponiveis */}
              <RadioGroup className='mb-4'>
                {schedules.map((schedule, index) => {
                  const optionId = `option-${index + 1}` // option-1, option-2, option-3, ...
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={optionId} id={optionId} disabled={schedule.status === 'reserved'}/>
                      <Label className="flex justify-center items-center gap-3" htmlFor={optionId}>
                        {schedule.hourInit} - {schedule.hourEnd}
                        {schedule.status === 'reserved' ? (
                          <FaCircle
                            size={8}
                            strokeWidth={1.25}
                            color="#cf1717"
                          />
                        ) : (
                          <FaCircle
                            size={8}
                            strokeWidth={1.25}
                            color="#25ca33"
                          />
                        )}
                      </Label>
                    </div>
                  )
                })}
              </RadioGroup>

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
