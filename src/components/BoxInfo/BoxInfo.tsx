interface BoxInfoProps {
  Title: string;
  Content: string;
}

import { InfoCircledIcon } from "@radix-ui/react-icons";

export function BoxInfo ({Title, Content} : BoxInfoProps) {
  return (
    <div className="flex flex-1 flex-col mx-3 max-w-4xl cursor-pointer border rounded-md">
      <div className="flex flex-1 flex-col hover:bg-orange-400 hover:text-slate-50 bg-white p-5 rounded-lg shadow-lg transition-all">
        <h1 className="text-lg font-bold mb-5 flex items-center gap-1"><InfoCircledIcon/>{Title}</h1>
        <h1 className="text-sm text-slate-800 font-normal">{Content}</h1>
      </div>
    </div>
  )
}