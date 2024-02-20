import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { PlusCircle } from 'lucide-react'

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { StudyRoomProps } from '@/pages/admin/home'

interface CreateRoomProps {
  isCreateRoomSideBar?: boolean;
  children?: React.ReactNode;
  // name: string;
  // ip: string;
}

// import { useContext } from 'react'
// import { toogleContext } from '@/contexts/toogleContext'

// const { toogleDialog } = useContext(toogleContext)

export function CreateRoom({children, isCreateRoomSideBar} : CreateRoomProps) {
  const [nameStudyRoom, setnameStudyRoom] = useState<string>('')
  const [IPStudyRoom, setIpStudyRoom] = useState<string>('')

  // const navigate = useNavigate();

  const [studyRooms, setStudyRooms] = useState<StudyRoomProps[]>(() => {
    // Recupera o estado do localStorage ao inicializar
    const savedStudyRooms = localStorage.getItem('studyRooms');
    if (savedStudyRooms) {
      const parsedStudyRooms = JSON.parse(savedStudyRooms);
      // Verifica se o array recuperado do localStorage está vazio
      if (Array.isArray(parsedStudyRooms) && parsedStudyRooms.length) {
        return parsedStudyRooms;
      }
    }
    // Retorna um array vazio se savedStudyRooms for null ou um array vazio
    return [];
  });

  useEffect(() => {
    // Salva o estado no localStorage sempre que studyRooms for alterado
    if (studyRooms !== undefined) {
      localStorage.setItem('studyRooms', JSON.stringify(studyRooms))
    }
  }, [studyRooms])

  function createStudyRoom(nameStudyRoom: string, IPStudyRoom: string) {
    const newStudyRoom = {
      name: nameStudyRoom,
      ip: IPStudyRoom,
    }
    setStudyRooms([...studyRooms, newStudyRoom])
  }

  return (
    <Dialog>
      {isCreateRoomSideBar ?
        children 
        : 
        <DialogTrigger className="bg-green-500 rounded-full w-10 h-10 flex justify-center items-center text-zinc-900 m-4">
          <PlusCircle className="w-full h-full text-zinc-100" />
        </DialogTrigger>
      }
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Realizar reserva de horário na sala
          </DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-2 my-4">
          <Label className="text-zinc-900">Nome da sala</Label>
          <Input
            value={nameStudyRoom}
            onChange={e => setnameStudyRoom(e.target.value)}
            type="name"
            placeholder="Sala 01"
          />
          <Label className="text-zinc-900">Digite o IP do equipamento</Label>
          <Input
            value={IPStudyRoom}
            onChange={e => setIpStudyRoom(e.target.value)}
            type="name"
            placeholder="192.158.1.38"
          />
          {/* Pegar input e criar nova sala */}
          {/* Selecionar horários disponiveis */}
          <div className="mt-3 flex justify-between">
            <Link to={'/'}>
              <Button
                variant="destructive"
                className="font-bold shadow-md w-54 py-1 px-2 flex gap-1"
              >
                <p>Cancelar</p>
              </Button>
            </Link>
            <Button
              onClick={() => createStudyRoom(nameStudyRoom, IPStudyRoom)}
              className="bg-green-500 hover:bg-green-600 font-bold shadow-md w-54 py-1 px-2 flex gap-1"
            >
              <PlusCircle className="w-4 h-4" />
              <p>Agendar</p>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
