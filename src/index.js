import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"

const context = React.createContext();
export const CtxConsumer = context.Consumer;

const animals = ['snake', 'elephant', 'lion']

const routing = (
  <BrowserRouter>
    <context.Provider value={{ animals: animals }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </context.Provider>
  </BrowserRouter>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(routing);



// ReactDOM.render(routing, document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
