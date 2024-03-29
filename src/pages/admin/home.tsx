import { useState, useContext, useEffect } from 'react'
import UsingLayoutPage from '../usingLayoutPage'
import axios from 'axios';

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { FilePlus2, LineChart, Search } from 'lucide-react'
import { BoxInfo } from '@/components/BoxInfo/BoxInfo'

import { CreateRoom } from '@/components/CreateRoom/createRoom'

import NotGraph from '@/assets/notgraph.png'
import { Link } from 'react-router-dom'

import QRCode from 'qrcode.react'

export interface StudyRoomProps {
  name: string
  ip: string
}

import { AuthUserContext } from '@/contexts/auth'

export function Home() {
  const { user, existReservation, setExistReservation, ipAddress, setIpAddress } = useContext(AuthUserContext)

  useEffect(() => {
    fetch(ipAddress + '/salas')
    .then(response => {
      console.log(response)
    }).then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }, [])

  // Recupera o estado do localStorage ao inicializar
  const [studyRooms] = useState<StudyRoomProps[]>(() => {
    // Recupera o estado do localStorage ao inicializar
    const savedStudyRooms = localStorage.getItem('studyRooms')
    if (savedStudyRooms) {
      const parsedStudyRooms = JSON.parse(savedStudyRooms)
      // Verifica se o array recuperado do localStorage está vazio
      if (Array.isArray(parsedStudyRooms) && parsedStudyRooms.length) {
        return parsedStudyRooms
      }
    }
    // Retorna um array vazio se savedStudyRooms for null ou um array vazio
    return []
  })

  const [reservation, setReservation] = useState([])
  const [uniqueCode, setUniqueCode] = useState<string | null>(null)

  useEffect(() => {
    // Recupera as reservas do localStorage e converte de volta em um array de objetos
    const storedReservation = JSON.parse(
      localStorage.getItem('reservation') as string
    )

    if (storedReservation) {
      setReservation(storedReservation)
      setExistReservation(true)
      setUniqueCode(storedReservation.uniqueCode)
    }
  }, [])

  return (
    <div>
      {user.type === 'admin' ? (
        <UsingLayoutPage>
          <h1 className="text-2xl font-bold mb-2">Salas criadas</h1>

          <form className="flex gap-2 mb-3 justify-between">
            <div className="flex gap-3 w-3/6">
              <Input type="nameRoom" placeholder="Nome da sala" />
              <Input type="ip" placeholder="IP" />
            </div>

            <Button variant="link" className="flex gap-1">
              <Search className="w-4 h-4" />
              Filtrar
            </Button>
          </form>

          {/* Caso vazio colocar mensagem */}
          {studyRooms.length === 0 ? (
            <>
              <div className="flex">
                <Alert variant={'destructive'}>
                  <FilePlus2 className="h-5 w-5" />
                  <AlertTitle>Ops!</AlertTitle>
                  <AlertDescription>
                    Parece que ainda não temos nenhuma sala criada. Clique no
                    botão para criar uma nova sala!
                  </AlertDescription>
                </Alert>
                <div className="flex flex-wrap gap-5 justify-center items-center">
                  <CreateRoom />
                </div>
              </div>
            </>
          ) : (
            // Caso tenha salas, renderizar as salas
            <div className="grid grid-cols-2 gap-y-4">
              {studyRooms.map((studyRoom, index) => {
                return (
                  <Link
                    to={{
                      pathname: '/studyRoom'
                    }}
                    state={studyRoom}
                    key={index}
                  >
                    <BoxInfo
                      Title={studyRoom.name}
                      Content={studyRoom.ip}
                      schedules={[
                        {
                          hourInit: '08:00',
                          hourEnd: '10:00',
                          status: 'reserved'
                        },
                        {
                          hourInit: '10:00',
                          hourEnd: '11:00',
                          status: 'reserved'
                        },
                        {
                          hourInit: '11:00',
                          hourEnd: '12:00',
                          status: 'reserved'
                        },
                        {
                          hourInit: '12:00',
                          hourEnd: '13:00',
                          status: 'available'
                        },
                        {
                          hourInit: '13:00',
                          hourEnd: '14:00',
                          status: 'reserved'
                        },
                        {
                          hourInit: '14:00',
                          hourEnd: '15:00',
                          status: 'available'
                        },
                        {
                          hourInit: '15:00',
                          hourEnd: '16:00',
                          status: 'reserved'
                        }
                      ]}
                    />
                  </Link>
                )
              })}

              <div className="flex flex-wrap gap-5 justify-center items-center">
                <CreateRoom />
              </div>
            </div>
          )}
          <Separator className="m-5" />
          <h1 className="text-2xl font-bold mb-2">
            Histórico das reservas diárias
          </h1>

          <div>
            {/* inserir imgagem quando não tiver o tabela */}
            <div className="flex justify-center w-full">
              <img className="w-2/4" src={NotGraph} alt="Nenhuma sala criada" />
            </div>
            <Alert>
              <div className="flex gap-6 justify-center items-center text-muted-foreground">
                <LineChart className="w-10 h-10" />
                <div>
                  <AlertTitle>Opa!</AlertTitle>
                  <AlertDescription>
                    Aparentemente ainda não existe histórico de reservas.
                    Precisa criar uma sala e reserva um horário!
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
          <div className="pb-6"></div>
        </UsingLayoutPage>
      ) : (
        // Caso user sera STUDENT
        <UsingLayoutPage>
          {/* se user tiver reserva, exibir o codigo da reserva */}
          {existReservation ? (
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Codigo da sala reservada
              </h1>

              <div className="bg-zinc-100 border rounded-md shadow-md py-8 flex flex-col justify-center items-center">
                <QRCode value={`${uniqueCode}`} size={250} />
                <h1 className="text-xl font-bold mb-2">{uniqueCode}</h1>
                <Button 
                  variant={'destructive'}
                  onClick={() => {
                      localStorage.removeItem('reservation')
                      setExistReservation(false)
                    }}
                >
                  Cancelar reserva
                </Button>
              </div>

              <Separator className="mb-5 mt-5" />
              <h1 className="text-2xl font-bold mb-2">
                Histórico das reservas diárias
              </h1>
              <div className="flex justify-center w-full">
                <img
                  className="w-2/4"
                  src={NotGraph}
                  alt="Nenhuma sala criada"
                />
              </div>
              <Alert>
                <div className="flex gap-6 items-center text-muted-foreground">
                  <LineChart className="w-10 h-10" />
                  <div>
                    <AlertTitle>Opa!</AlertTitle>
                    <AlertDescription>
                      Aparentemente ainda não existe histórico de reservas.
                      Precisa fazer uma reserva!
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
              <div className="pb-6"></div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-2">Visualizar reservas</h1>
              <Alert variant={'destructive'}>
                <FilePlus2 className="h-5 w-5" />
                <AlertTitle>Ops!</AlertTitle>
                <AlertDescription>
                  Parece que ainda não temos nenhuma reserva. Selecione uma sala disponivel abaixo!
                </AlertDescription>
              </Alert>

              <Separator className="mb-5 mt-5" />
              <h1 className="text-2xl font-bold mb-2">
                Salas disponiveis para reserva
              </h1>
              <div className="flex flex-col gap-2">
                {studyRooms.map((studyRoom, index) => {
                  return (
                    <Link
                      to={{
                        pathname: '/studyRoom'
                      }}
                      state={studyRoom}
                      key={index}
                    >
                      <BoxInfo
                        Title={studyRoom.name}
                        Content={studyRoom.ip}
                        schedules={[
                          {
                            hourInit: '08:00',
                            hourEnd: '10:00',
                            status: 'reserved'
                          },
                          {
                            hourInit: '10:00',
                            hourEnd: '11:00',
                            status: 'reserved'
                          },
                          {
                            hourInit: '11:00',
                            hourEnd: '12:00',
                            status: 'reserved'
                          },
                          {
                            hourInit: '12:00',
                            hourEnd: '13:00',
                            status: 'available'
                          },
                          {
                            hourInit: '13:00',
                            hourEnd: '14:00',
                            status: 'reserved'
                          },
                          {
                            hourInit: '14:00',
                            hourEnd: '15:00',
                            status: 'available'
                          },
                          {
                            hourInit: '15:00',
                            hourEnd: '16:00',
                            status: 'reserved'
                          }
                        ]}
                      />
                    </Link>
                  )
                })}
              </div>
              <Separator className="m-5" />
              <h1 className="text-2xl font-bold mb-2">
                Histórico das reservas diárias
              </h1>
              <div className="flex justify-center w-full">
                <img
                  className="w-2/4"
                  src={NotGraph}
                  alt="Nenhuma sala criada"
                />
              </div>
              <Alert>
                <div className="flex gap-6 items-center text-muted-foreground">
                  <LineChart className="w-10 h-10" />
                  <div>
                    <AlertTitle>Opa!</AlertTitle>
                    <AlertDescription>
                      Aparentemente ainda não existe histórico de reservas.
                      Precisa fazer uma reserva!
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
              <div className="pb-6"></div>
            </div>
          )}
        </UsingLayoutPage>
      )}
    </div>
  )
}
