interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout ({children}: LayoutProps ) {
  return (
    <div className="bg-slate-700 flex flex-1">
      {children}
    </div>
  )
}