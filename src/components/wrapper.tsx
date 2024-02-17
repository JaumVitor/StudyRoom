interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper ({children} : WrapperProps) {
  return (
    <div className="flex flex-1 flex-col mx-5 mb-4 mt-20 max-w-screen-lg">
      {children}
    </div>
  )
}