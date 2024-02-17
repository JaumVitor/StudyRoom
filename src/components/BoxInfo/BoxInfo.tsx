interface BoxInfoProps {
  Title: string;
  Content: string;
  schedules?: [
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
    {hourInit: string, hourEnd: string, status: string},
  ];
}

import { InfoCircledIcon } from "@radix-ui/react-icons";
import { FaCircle } from "react-icons/fa";
import { Separator } from "../ui/separator";

export function BoxInfo ({Title, Content, schedules} : BoxInfoProps) {
  return (
    <div className="flex flex-1 flex-col mx-3 max-w-4xl cursor-pointer border rounded-md">
      <div className="flex flex-1 flex-col hover:bg-orange-400 hover:text-slate-50 bg-white p-5 rounded-lg shadow-lg transition-all">
        <h1 className="text-lg font-bold flex items-center gap-1"><InfoCircledIcon/>{Title}</h1>
        
        <Separator className="mb-5"/>
        {schedules && schedules.length > 0 ? (
          <h1 className="text-sm text-slate-800 font-normal "><span className="font-bold">IP ESP32: </span>{Content}</h1>
        ) : (
          <h1 className="text-sm text-slate-800 font-normal">{Content}</h1>
        )}

        {schedules && (
          <div className="mt-5">
            <h1 className="text-lg font-bold mb-3 text underline">Horários</h1>

            <div className="grid grid-cols-3 items-center justify-center gap-2">
              {schedules.map((schedule, index) => (
                <div key={index} className="flex justify-center items-center gap-[3px]">
                  {schedule.status === "reserved" ?
                    <h1 className="text-[0.7rem] text-muted-foreground font-semibold">
                      {schedule.hourInit} - {schedule.hourEnd}
                    </h1>
                    :
                    <h1 className="text-[0.7rem] font-bold">
                      {schedule.hourInit} - {schedule.hourEnd}
                    </h1>
                  }
                  {schedule.status === "reserved" ? 
                    <FaCircle 
                      size={8}
                      strokeWidth={1.25} 
                      color="#cf1717"
                    /> : 
                    <FaCircle 
                      size={8} 
                      strokeWidth={1.25} 
                      color="#25ca33"
                  />}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}