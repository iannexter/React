import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Header from "./components/Header.tsx";

import Input from "./components/Input.tsx";

//import { Header } from './Header.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />

    <App />


  </StrictMode>,
);
