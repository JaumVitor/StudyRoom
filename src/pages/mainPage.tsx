import Layout from '../components/layout'
import SideBar from '../components/sideBar'
// import ContentMain from '../components/contentMain'
import Wrapper from '../components/wrapper'
import { AdminContentMain } from './admin_mainPage/admin_contentMain'

export default function MainPage () {
  return (
    <>
      <div className='flex h-screen max-w-full'>
        <Layout> 
          <SideBar/>
          <Wrapper> 
            {/* Dependendo do tipo de usuário, vai renderizar um componente diferente */}
            <AdminContentMain />
            {/* <ContentMain /> */}
          </Wrapper>
        </Layout>
      </div>
    </>
  )
}