interface BoxInfoProps {
  Title: string;
  Content: string;
}

import { InfoCircledIcon } from "@radix-ui/react-icons";

export function BoxInfo ({Title, Content} : BoxInfoProps) {
  return (
    <div className="flex flex-1 flex-col mx-3 max-w-4xl">
      <div className="flex flex-1 flex-col bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-lg font-bold mb-5 flex items-center gap-1"><InfoCircledIcon/>{Title}</h1>
        <p className="text-sm text-zinc-500 font-light">{Content}</p>
      </div>
    </div>
  )
}