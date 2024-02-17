import { Header } from '@/components/Header'
import Layout from '../components/layout'
import SideBar from '../components/sideBar'
// import ContentMain from '../components/contentMain'
import Wrapper from '../components/wrapper'
import { Home } from './admin/home'
// import { StudyRoom } from './admin/studyRoom'

export default function MainPage () {
  return (
    <>
      <div className='flex h-screen max-w-full'>
        <SideBar/>
        <Layout> 
          <div className='flex flex-1 flex-wrap w-full justify-center'>
            <Header />
            <Wrapper>
              {/* Dependendo do tipo de usuário, vai renderizar um componente diferente */}
              < Home/>
              {/* <ContentMain /> */}
            </Wrapper>
          </div>
        </Layout>
      </div>
    </>
  )
}