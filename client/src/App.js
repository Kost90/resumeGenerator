import { Routes, Route} from "react-router-dom";

import { UsersProvider } from "./api/usersContext/UsersContext";
import { LoginProvider } from "./api/loginContext/LoginContext";
import { ResumeProvider } from "./api/resumeContext/ResumeContext";
import { StyledEngineProvider } from "@mui/material/styles";

import LoginAuth from "./components/hoc/LoginAuth";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Profilepage from "./pages/Profilepage";
import Registerpage from "./pages/Registerpage";
import Header from "./components/ui/header/Header";

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
                <Route path="/loginpage" element={<Loginpage />} />
                <Route
                  path="/profilepage"
                  element={
                    <LoginAuth>
                      <Profilepage />
                    </LoginAuth>
                  }
                />
                <Route path="/registerpage" element={<Registerpage />} />
              </Routes>
            </UsersProvider>
          </LoginProvider>
        </ResumeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
