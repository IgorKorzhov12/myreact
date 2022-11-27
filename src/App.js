import SingUpPage from "./Pages/SingUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LogIn from "./Pages/LogIn";
import Account from "./Components/Layouts/Account";
import {useState} from "react";

function App() {
  const [login, setLogin] = useState(false);

  const auth = () => {
    setLogin((current) => !current);
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage login={login} auth={auth}/>} />
          <Route path="account/" element={<Account/>} >
            <Route path="singUp" element={<SingUpPage login={login} auth={auth}/>}/>
            <Route path="logIn" element={<LogIn login={login} auth={auth}/>}/>
          </Route>
          {login?
            <Route path="trainings" element={<div>Trainings</div>}/>
          :
            null
          }
          <Route path="*" element={<MainPage login={login} auth={auth}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
