import React from "react";
import Greeting from "./components/greetings"; // Importing without {}
import Login from './components/login';
import Profile from "./components/profile";
import ListView from "./components/listView";
import Calculator from "./components/calculator";
import ProductDetails from "./components/product"; // Fixed spelling
import PeoplePage from "./pages/PeoplePage";
import ProductListPage from './components/ProductListPage';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <ProductListPage />
    </BrowserRouter>
  );
}

export default App;
