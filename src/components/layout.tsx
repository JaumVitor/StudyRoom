interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout ({children}: LayoutProps ) {
  return (
    <div className="flex flex-auto bg-zinc-100 justify-center h-screen">
      {children}
    </div>
  )
}