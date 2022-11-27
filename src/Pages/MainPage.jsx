import Navbar from "../Components/Navbar/Navbar";

function MainPage(props) {
  return (
    <div>
      <Navbar login={props.login} auth={props.auth}/>
    </div>
  );
}

export default MainPage;