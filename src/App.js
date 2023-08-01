import './App.css';
// 當同一個 js或 jsx中有多個可以引入時，就可以指定引入
// import { Header } from "./components/header"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  function alertFromApp() {
    alert("這個 function 是從 App.js來的");
  }

  return (
    <div className="App">
      <h3>Hello world</h3>
      <Header info="This is my message" myNumber="5"/>
      <Footer trademark="page by RyanClayKao" appAlert={alertFromApp}/>
    </div>
  );
}

export default App;
