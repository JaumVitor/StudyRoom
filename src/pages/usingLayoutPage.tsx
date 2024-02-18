import { Header } from '@/components/Header'
import Layout from '../components/layout'
import SideBar from '../components/sideBar'
// import ContentMain from '../components/contentMain'

import Wrapper from '../components/wrapper'

interface MainPageProps {
  children: React.ReactNode;
}

export default function UsingLayoutPage ({children} : MainPageProps) {
  return (
    <>
      <div className='flex h-screen max-w-full'>
        <SideBar/>
        <Layout> 
          <div className='flex flex-1 flex-wrap w-full justify-center'>
            <Header />
            <Wrapper>
              {/* Dependendo do tipo de usuário, vai renderizar um componente diferente */}
              {children}
            </Wrapper>
          </div>
        </Layout>
      </div>
    </>
  )
}