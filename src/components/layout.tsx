interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout ({children}: LayoutProps ) {
  return (
    <div className="min-h-screen overflow-auto flex flex-1 justify-center">
      {children}
    </div>
  )
}