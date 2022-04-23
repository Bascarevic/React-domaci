import './App.css';
import NavBar from "./components/NavBar";
import Usluge from "./components/Usluge";
import {useState} from "react";
import MyAppointments from './components/MyAppointments';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import slika1 from "./depilacija.jpg";
import slika2 from "./solarijum.jpg";
import slika3 from "./laserska.jpg";

function App() {

  //let cartNum = 0;

  const[cartNum, setCartNum]=useState(0);
  const[cartProd, setCartProd]=useState([]);
  const[usluge] = useState([
    {
    id:1,
    naziv: "Depilacija",
    opis: "Neki opis depilacije",
    kolicina:0,
    slika: slika1
    },
    {
      id:2,
      naziv: "Solarijum",
      opis: "Neki opis",
      kolicina: 0,
      slika: slika2
    },
    {
      id:3,
      naziv: "Laserksa epilacija",
      opis: "Neki opis",
      kolicina: 0,
      slika: slika3
    }
  ]);

  function refreshCart(){
    let noveUsluge = usluge.filter((usl)=>usl.kolicina>0);
    setCartProd(noveUsluge);
  }

  function dodajRezervaciju(naziv, id){
    setCartNum(cartNum+1);
    console.log(cartNum);
    usluge.forEach((usl)=>{
      if(usl.id===id){
        usl.kolicina++;
      }
    });
    refreshCart();
  }

  return (
  <BrowserRouter className="App">
    <NavBar cartNum={cartNum}></NavBar>
    <Routes>
      <Route path="/" element={<Usluge usluge={usluge} onAdd={dodajRezervaciju}/>}/>
      <Route path="/appointments*" element={<MyAppointments usluge={cartProd}/>}/>
    </Routes>
    
   
  </BrowserRouter>
  );

}

export default App;
