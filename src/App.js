import './App.css';
// 當同一個 js或 jsx中有多個可以引入時，就可以指定引入
// import { Header } from "./components/header"
import Header from "./components/header";
import Footer from "./components/footer";
import Numbers from "./components/numbers";

import styled from "styled-components";

function ShowMessage(props){
  if (props.isShow){
    return <p>MyMessage</p>
  }else{
    return <p>Forbidden</p>
  }
}

function alertFromApp() {
  alert("這個 function 是從 App.js來的");
}

const pStyle = {
  fontSize: '2em',
  color: 'red'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`;

function App() {
  

  const userLogin = true;

  if (userLogin) {
    return (
      <div className="App">
        {/* <h3>Hello world</h3>
        <p style={pStyle}>main content</p>
        <Paragraph>New Styled</Paragraph>
        <Header info="This is my message" myNumber="5"/>
        <Footer trademark="page by RyanClayKao" appAlert={alertFromApp}/>
        <ShowMessage isShow={false} /> */}

        <Numbers></Numbers>
      </div>
    );
  }else{
    return <h3>Forbidden</h3>
  }

  
}

export default App;
