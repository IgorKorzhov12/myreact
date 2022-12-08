import SingUpPage from "./Pages/SingUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LogIn from "./Pages/LogIn";
import Account from "./Components/Layouts/Account";
import {useState} from "react";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Pages/Programs";
import CurrentProgram from "./Pages/CurrentProgram";

function App() {
  const [login, setLogin] = useState(false);
  const [save, setSave] = useState(false);

  const auth = () => {
    setLogin((current) => !current);
  }

  const saveInf = () => {
    setSave((current) => !current);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar login={login} auth={auth}/>}>
          <Route index element={<MainPage />}/>
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<CurrentProgram />}/>
          {
            login?
              <>
                <Route path="profile/:id" element={<Profile save={save} saveInf={saveInf}/>}/>
              </>
              :
              <Route path="account/" element={<Account/>} >
                <Route path="singUp" element={<SingUpPage login={login} auth={auth}/>}/>
                <Route path="logIn" element={<LogIn login={login} auth={auth}/>}/>
              </Route>
          }

          <Route path="*" element={<MainPage login={login} auth={auth}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



        {/*
        <Route path="/" element={<Navbar login={login} auth={auth}>
            <Route index element={<MainPage />}/>
              {login?
                <>
                  <Route path="trainings" element={<div>Trainings</div>}/>
                  <Route path="profile/:id" element={<Profile saveInf={saveInf} login={login}/>}/>
                </>
                :
                <Route path="account/" element={<Account/>} >
                  <Route path="singUp" element={<SingUpPage login={login} auth={auth}/>}/>
                  <Route path="logIn" element={<LogIn login={login} auth={auth}/>}/>
                </Route>
              }
              <Route path="*" element={<MainPage login={login} auth={auth}/>}/>
          </Route>*/}
