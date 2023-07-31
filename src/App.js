import logo from './logo.svg';
import './App.css';
// 當同一個 js或 jsx中有多個可以引入時，就可以指定引入
// import { Header } from "./components/header"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <h3>Hello world</h3>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
