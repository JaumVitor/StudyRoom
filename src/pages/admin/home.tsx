import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import NotGraph from "@/assets/notgraph.png"

import { BoxInfo } from "@/components/BoxInfo/BoxInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { Label } from "@radix-ui/react-label";
import { PlusCircle, FilePlus2, LineChart, CalendarIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"

interface StudyRoomProps {
  name: string;
  ip: string;
}

export function Home () {
  //Somente para renderizar a tabela
  const [isTable, setIsTable] = useState(true)

  const [studyRooms, setStudyRooms] = useState<StudyRoomProps[]>(() => {
    // Recupera o estado do localStorage ao inicializar
    const savedStudyRooms = localStorage.getItem('studyRooms');
    return savedStudyRooms ? JSON.parse(savedStudyRooms) : [];
  });

  useEffect(() => {
    // Armazena o estado no localStorage sempre que ele muda
    localStorage.setItem('studyRooms', JSON.stringify(studyRooms));
  }, [studyRooms]);

  // O restante do seu componente aqui
  //use state para genrenciar as salas criadas que inicialmente é um array vazio
  // const [studyRooms, setStudyRooms] = useState<StudyRoomProps[]>([])
  const [nameStudyRoom, setnameStudyRoom] = useState('' as string)

  const [IPStudyRoom, setIpStudyRoom] = useState('' as string)

  //função para criar uma nova sala
  function createStudyRoom(name: string, ip: string) {
    //criar uma nova sala e adicionar no array
    setStudyRooms([...studyRooms, {name, ip}])
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Salas criadas</h1>

      <form className="flex gap-2 mb-3 justify-between">
          <div className="flex gap-3 w-3/6">
            <Input type="nameRoom" placeholder="Nome da sala"/>
            <Input type="ip" placeholder="IP"/>
          </div>

          <Button variant='link' className="flex gap-1">
            <Search className="w-4 h-4"/>Filtrar
          </Button>
        </form>

      {/* Caso vazio colocar mensagem */}
      {studyRooms.length === 0 ? 
        <>
          <div className="flex">
            <Alert variant={"destructive"}>
              <FilePlus2 className="h-5 w-5" />
              <AlertTitle>Ops!</AlertTitle>
              <AlertDescription>
                Parece que ainda não temos nenhuma sala criada. Clique no botão para criar uma nova sala!
              </AlertDescription>
            </Alert>
            <div className="flex flex-wrap gap-5 justify-center items-center">
              <Dialog>
                <DialogTrigger className="bg-green-500 rounded-full w-10 h-10 flex justify-center items-center text-zinc-900 m-4">
                  <PlusCircle className="w-full h-full text-zinc-100"/>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Realizar reserva de horário na sala</DialogTitle>
                  </DialogHeader>
                  <form className="flex flex-col gap-2 my-4">
                    <Label className="text-zinc-900">Nome da sala</Label>
                    <Input
                      value={nameStudyRoom}
                      onChange={(e) => setnameStudyRoom(e.target.value)}
                      type="name"
                      placeholder="Sala 01"
                    />
                    <Label className="text-zinc-900">Digite o IP do equipamento</Label>
                    <Input
                      value={IPStudyRoom}
                      onChange={(e) => setIpStudyRoom(e.target.value) }
                      type="name"
                      placeholder="192.158.1.38"
                    />
                    {/* Pegar input e criar nova sala */}
                    {/* Selecionar horários disponiveis */}
                    <div className="mt-3 flex justify-between">
                      <Button variant="destructive" className="font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                        <p>Cancelar</p>
                      </Button>
                      <Button onClick={ () => createStudyRoom(nameStudyRoom, IPStudyRoom) } className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                        <PlusCircle className="w-4 h-4"/>
                        <p>Agendar</p>
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </>
        :
        // Caso tenha salas, renderizar as salas
        <div className="grid grid-cols-2 gap-y-4">
          {
            studyRooms.map((studyRoom, index) => {
              return (
                <BoxInfo 
                  key={index} 
                  Title={studyRoom.name} 
                  Content={studyRoom.ip} 
                  schedules={[
                    {
                      hourInit: "08:00",
                      hourEnd: "10:00",
                      status: "reserved"
                    },
                    {
                      hourInit: "10:00",
                      hourEnd: "11:00",
                      status: "reserved"
                    },
                    {
                      hourInit: "11:00",
                      hourEnd: "12:00",
                      status: "reserved"
                    },
                    {
                      hourInit: "12:00",
                      hourEnd: "13:00",
                      status: "available"
                    },
                    {
                      hourInit: "13:00",
                      hourEnd: "14:00",
                      status: "reserved"
                    },
                    {
                      hourInit: "14:00",
                      hourEnd: "15:00",
                      status: "available"
                    },
                    {
                      hourInit: "15:00",
                      hourEnd: "16:00",
                      status: "reserved"
                    },
                  ]}
                />
              )
            })
          }

          <div className="flex flex-wrap gap-5 justify-center items-center">
            <Dialog>
              <DialogTrigger className="bg-green-500 rounded-full w-10 h-10 flex justify-center items-center text-zinc-900 my-8">
                <PlusCircle className="w-full h-full text-zinc-100"/>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">Realizar reserva de horário na sala</DialogTitle>
                </DialogHeader>

                <form className="flex flex-col gap-2 my-4">
                  <Label className="text-zinc-900">Nome da sala</Label>
                  <Input 
                    value={nameStudyRoom}
                    onChange={(e) => setnameStudyRoom(e.target.value)}
                    type="name"
                    placeholder="Sala 01"
                  />

                  <Label className="text-zinc-900">Digite o IP do equipamento</Label>
                  <Input 
                    value={IPStudyRoom}
                    onChange={(e) => setIpStudyRoom(e.target.value) }
                    type="name" 
                    placeholder="192.158.1.38"
                  />
                  {/* Pegar input e criar nova sala */}

                  {/* Selecionar horários disponiveis */}
                  <div className="mt-3 flex justify-between">
                    <Button variant="destructive" className="font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                      <p>Cancelar</p>
                    </Button>

                    <Button onClick={ () => createStudyRoom(nameStudyRoom, IPStudyRoom) } className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1">
                      <PlusCircle className="w-4 h-4"/>
                      <p>Agendar</p>
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      }
      <Separator className="m-5"/>
      <h1 className="text-2xl font-bold mb-4">Histórico das reservas diárias</h1>
        
      {isTable ? (
        <div>
          <Table className="border mb-3">
            <TableHeader>
              <TableRow>
                <TableHead>Salas</TableHead>
                <TableHead>Matriculas</TableHead>
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
                <TableHead>Código da reserva</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>01Vim3L1</TableCell>
                <TableCell className="font-bold text-orange-600">Em andamento</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>01Vim3L1</TableCell>
                <TableCell className="font-bold text-orange-600">Em andamento</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>01Vim3L1</TableCell>
                <TableCell className="font-bold text-red-600">Reserva expirada</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>UCim3WQ</TableCell>
                <TableCell className="font-bold text-red-600">Reserva expirada</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>06Him3Ly</TableCell>
                <TableCell className="font-bold text-red-600">Reserva expirada</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>67Fim3L2</TableCell>
                <TableCell className="font-bold text-green-600">Agendada</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>03pim3Xq</TableCell>
                <TableCell className="font-bold text-green-600">Agendada</TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="font-medium"><p>Sala 01</p></TableCell>
                <TableCell>20189053817</TableCell>
                <TableCell>09:00</TableCell>
                <TableCell>11:00</TableCell>
                <TableCell>94gim3Lo</TableCell>
                <TableCell className="font-bold text-green-600">Agendada</TableCell>
              </TableRow>
          
            </TableBody>
          </Table>
        </div>
      ) : (
        <div> {/* inserir imgagem quando não tiver o tabela */}
          <div className="flex justify-center w-full">
            <img className="w-2/4" src={NotGraph} alt="Nenhuma sala criada" />   
          </div>

          <Alert >
            <div className="flex gap-6 justify-center items-center text-muted-foreground">
              <LineChart className="w-10 h-10"/>
              <div>
                <AlertTitle>Opa!</AlertTitle>
                <AlertDescription>
                  Aparentemente não existe histórico de reservas ainda. Precisa criar uma sala e reserva um horário!
                </AlertDescription>
              </div>
            </div>
          </Alert>
        </div>
      )}
      <div className="pb-6"></div>
    </>
  )
}