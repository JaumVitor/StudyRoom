interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper ({children} : WrapperProps) {
  return (
    <div className="flex flex-1 flex-col mx-5 my-4 max-w-screen-lg">
      {children}
    </div>
  )
}