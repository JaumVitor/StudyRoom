import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
// import { Label } from "@/components/ui/label"
// import { toast } from "sonner"
import NotGraphA from '@/assets/notgraphA.png'

import { BoxInfo } from '@/components/BoxInfo/BoxInfo'

import { CalendarIcon } from '@radix-ui/react-icons'

import { LineChart, Search } from 'lucide-react'

import { MdOutlineCameraAlt } from 'react-icons/md'
import UsingLayoutPage from '../usingLayoutPage'
import { CreateSchedule } from '@/components/CreateSchedule/createSchedule'
import { useLocation } from 'react-router-dom'

// import { StudyRoomProps } from "@/pages/admin/home"
import { AuthUserContext } from '@/contexts/auth'
import { useContext } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function StudyRoom() {
  const { user } = useContext(AuthUserContext)
  const { state } = useLocation()

  const name = state?.name
  const ip = state?.ip

  //Precisa trazer informações da sala

  return (
    <div>
      {user.type === 'admin' ? (
        //StudyRoom para admin
        <UsingLayoutPage>
          <h1 className="text-3xl font-bold mb-2">Horários reservados</h1>
          <h2 className="text-2xl font-bold mb-2">
            {name} - IP: {ip}
          </h2>
          <div className="flex items-center justify-between mb-3">
            <form className="flex gap-2">
              <Input type="name" placeholder="Matricula" />
              <Input type="name" placeholder="Status" />

              <Button variant="link" className="flex gap-1">
                <Search className="w-4 h-4" />
                Filtrar
              </Button>
            </form>
            <CreateSchedule
              schedules={[
                { hourInit: '10:00', hourEnd: '11:00', status: 'expired' },
                { hourInit: '11:00', hourEnd: '13:00', status: 'expired' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'inProgress' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'inProgress' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'available' },
                { hourInit: '18:00', hourEnd: '19:00', status: 'available' },
                { hourInit: '20:00', hourEnd: '21:00', status: 'available' }
              ]}
            />
          </div>
          <Toaster />
          <div>
            <Table className="border mb-3 ">
              <TableHeader>
                <TableRow>
                  <TableHead>Usuários</TableHead>
                  <TableHead>
                    <div className="flex gap-1 items-center">
                      <CalendarIcon />
                      <p>Horário de inicio</p>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex gap-1 items-center">
                      <CalendarIcon />
                      <p>Horário Final</p>
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <p>Maria Eduarda</p>
                  </TableCell>

                  <TableCell>10:00</TableCell>
                  <TableCell>11:00</TableCell>
                  <TableCell className="font-bold text-red-700">
                    Reserva expirada
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">João Vitor</TableCell>
                  <TableCell>11:00</TableCell>
                  <TableCell>13:00</TableCell>
                  <TableCell className="font-bold text-orange-600">
                    Em andamento
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jhonata Sousa</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>15:00</TableCell>
                  <TableCell className="font-bold text-green-700">
                    Agendado
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Separator className="m-4" />
          <h1 className="text-xl font-bold mb-2">Ver câmera da sala</h1>
          <div className="cursor-pointer border-dashed border-[2px] border-slate-500 rounded-md bg-slate-300 shadow-sm mx-auto">
            <div className="w-full h-[15rem] flex justify-center items-center">
              <MdOutlineCameraAlt className="text-6xl opacity-50 text-slate-500" />
              <p className="opacity-50">Câmera da sala</p>
            </div>
          </div>
          <Separator className="m-4" />
          <h1 className="text-xl font-bold mb-2">Informações da sala</h1>
          <div className="flex pb-10">
            <BoxInfo Title="Lampadas" Content="As lampadas estão ligadas" />
            <BoxInfo Title="Nº Pessoas" Content="3 pessoas" />
            <BoxInfo
              Title="Split"
              Content="O ar condicionado está ligado - Com temperatura de 21C"
            />
          </div>
        </UsingLayoutPage>
      ) : (
        //StudyRoom para estudante
        <UsingLayoutPage>
          <h1 className="text-3xl font-bold mb-2">Reservar horário</h1>
          <h2 className="text-2xl font-bold mb-2">
            {name}
          </h2>
          <div className="flex items-center justify-between mb-3">
            <CreateSchedule
              schedules={[
                { hourInit: '10:00', hourEnd: '11:00', status: 'expired' },
                { hourInit: '11:00', hourEnd: '13:00', status: 'expired' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'inProgress' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'inProgress' },
                { hourInit: '14:00', hourEnd: '15:00', status: 'available' },
                { hourInit: '18:00', hourEnd: '19:00', status: 'available' },
                { hourInit: '20:00', hourEnd: '21:00', status: 'available' }
              ]}
            />
          </div>
          
          <Separator className="mb-4 mt-4" />
          <h2 className="text-2xl font-bold mb-1">
            Histórico de reservas nessa sala
          </h2>
          <div className="flex justify-center w-full">
            <img className="w-2/4" src={NotGraphA} alt="Nenhuma sala criada" />
          </div>
          <Alert>
            <div className="flex gap-6 items-center text-muted-foreground">
              <LineChart className="w-10 h-10" />
              <div>
                <AlertTitle>Opa!</AlertTitle>
                <AlertDescription>
                  Aparentemente ainda não existe histórico de reservas. Precisa
                  fazer uma reserva nessa sala!
                </AlertDescription>
              </div>
            </div>
          </Alert>
          <div className="pb-6"></div>        
        </UsingLayoutPage>
      )}
    </div>
  )
}
