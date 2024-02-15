import Layout from '../components/layout'
import SideBar from '../components/sideBar'
// import ContentMain from '../components/contentMain'
import Wrapper from '../components/wrapper'
import { StudyRoom } from './admin/studyRoom'

export default function MainPage () {
  return (
    <>
      <div className='flex h-screen max-w-full'>
        <SideBar/>
        <Layout> 
          <Wrapper> 
            {/* Dependendo do tipo de usuário, vai renderizar um componente diferente */}
            <StudyRoom />
            {/* <ContentMain /> */}
          </Wrapper>
        </Layout>
      </div>
    </>
  )
}