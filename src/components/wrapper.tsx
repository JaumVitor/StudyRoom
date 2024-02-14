interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper ({children} : WrapperProps) {
  return (
    <div className="bg-red-500 flex flex-1 flex-col">
      {children}
    </div>
  )
}