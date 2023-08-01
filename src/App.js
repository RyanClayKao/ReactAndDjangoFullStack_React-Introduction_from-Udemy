import './App.css';
// 當同一個 js或 jsx中有多個可以引入時，就可以指定引入
// import { Header } from "./components/header"
import Header from "./components/header"
import Footer from "./components/footer"

function ShowMessage(props){
  if (props.isShow){
    return <p>MyMessage</p>
  }else{
    return <p>Forbidden</p>
  }
}

function App() {
  function alertFromApp() {
    alert("這個 function 是從 App.js來的");
  }

  const userLogin = true;

  if (userLogin) {
    return (
      <div className="App">
        <h3>Hello world</h3>
        <Header info="This is my message" myNumber="5"/>
        <Footer trademark="page by RyanClayKao" appAlert={alertFromApp}/>
        <ShowMessage isShow={false} />
      </div>
    );
  }else{
    return <h3>Forbidden</h3>
  }

  
}

export default App;
