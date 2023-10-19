import { Routes, Route } from 'react-router-dom'

import { UsersProvider } from './context/usersContext/UsersContext'
import { LoginProvider } from './context/loginContext/LoginContext'
import { ResumeProvider } from './context/resumeContext/ResumeContext'
import { StyledEngineProvider } from '@mui/material/styles'

import LoginAuth from './components/hoc/LoginAuth'

import Homepage from './pages/Home/Homepage'
import Loginpage from './pages/Login/Loginpage'
import Profilepage from './pages/Profile/Profilepage'
import Registerpage from './pages/Register/Registerpage'
import Header from './components/ui/header/Header'
import MainSection from 'components/ui/mainsection/MainSection'

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ResumeProvider>
          <LoginProvider>
            <UsersProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="loginpage" element={<Loginpage />} />
                <Route
                  path="profilepage"
                  element={
                    <LoginAuth>
                      <Profilepage />
                    </LoginAuth>
                  }
                >
                  <Route path='mainsection' element={<MainSection/>}/>
                </Route>
                <Route path="registerpage" element={<Registerpage />} />
              </Routes>
            </UsersProvider>
          </LoginProvider>
        </ResumeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default App
