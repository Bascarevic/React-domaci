import './App.css';
import NavBar from "./components/NavBar";
import Usluge from "./components/Usluge";
import {useState} from "react";
import MyAppointments from './components/MyAppointments';
import Detaljnije from './components/Detaljnije';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import slika1 from "./Nega lica.jpg";
import slika2 from "./Nega tela.jpg";
import slika3 from "./Manikir.jpg";
import slika4 from "./Epilacija.jpg";
import slika5 from "./Trepavice.jpg";

function App() {

  const[brojTermina, setBrojTermina]=useState(0);
  const[zakazaniTermini, setZakazaniTermini]=useState([]);
  const[usluge] = useState([
    {
    id:1,
    naziv: "Nega lica",
    kratak_opis:"Čišćenje lica, vrata i dekoltea tonikom. Piling lica, vrata i dekoltea finim pilinzima, koji će...",
    opis: "Čišćenje lica, vrata i dekoltea tonikom.\nPiling lica, vrata i dekoltea finim pilinzima, koji će zajedno sa tonikom otkloniti sve nečistoće sa površine kože i tako je pripremiti za ono što sledi, a to je:\n"+
   "Priprema lica za dubinsko čišćenje, biljnim pakovanjem koje se stavlja ispod termo maske\n"+
  "Cedjenje komedona, otklanjanje grizeva, saniranje akni.\n" + 
  "Nakon cedjenja, lice se tretira bio-laserom, koji otklanja crvenilo, ubrzava zarastanje lezija, regeneriše kožu, a osim toga, ubrzava sanaciju herpesa i obolelih sinusa.\n" +
  "Dubinska dezinfekcija lica Darsonval aparatom.\n" + 
  "Aroma terapija, koja podrazumeva masažu lica negovanim i eteričnim uljima, pažljivo odabranim prema tipu kože i Vašem ličnom odabiru mirisne note.\n" +
   "Biološki tretman: unošenje kolagena, hijalurona, elastina... u kožu jonoforezom. Maska prema tipu kože, koja stoji 10-15 minuta.\n" +
   "Dužina trajanja celog tretmana je do 2 sata.",
    kolicina:0,
    slika: slika1
    },
    {
      id:2,
      naziv: "Nega tela",
      kratak_opis:"Sprovodi se u protokolima od 10 tretmana i serijskim ubrizgavanjem...",
      opis: "Sprovodi se u protokolima od 10 tretmana i serijskim ubrizgavanjem materija koje tope masti nagomilane u formi celulita, kao i materija koje podstiču cirkulaciju u kritičnim regijama.\n Na taj način, ovim dvostrukim dejstvom, uspešno Vas rešavamo problema sa kojim se susreću gotovo svi, bez obzira na uzrast i pol, način života, način ishrane, fizičku aktivnost... \nTretman je bezbedan i vrlo uspešan.",
      kolicina: 0,
      slika: slika2
    },
    {
      id:3,
      naziv: "Pedikir/manikir",
      kratak_opis:"Manikir je sastavni deo higijene coveka, podrazumeva negu ruku i noktiju. Kao i lice...",
      opis: "Manikir je sastavni deo higijene coveka, podrazumeva negu ruku i noktiju. Kao i lice, ruke su prve na sta obratimo paznju, kako kod sebe tako i kod drugih. \nNa zalost, stetni uticaji iz nase okoline, kao sto su hladnoca ili razna hemijska sredstva, koja se koriste u domacinstvu isisuju kozu ruku cineci je grubom i ispucalom. Zato je vazno sprovoditi tretman manikira bar jednom mesecno. \nPostoji klasican i SPA manikir."+
      "SPA manikir podrazumeva ceo postupak klasicnog manikira, sa upotrebom kadice namenjene za spa manikir i potpune nege ruku i traje 30 minuta. \nNaziv manikir je nastao od latinske reci manus-ruka i cura-lecenje.",
      kolicina: 0,
      slika: slika3
    },
    {
      id:4,
      naziv: "Depilacija i epilacija",
      kratak_opis:"Epilacija je najefikasnija, najmanje bolna, najtrajnija metoda koja je danas dostupna...",
      opis: "Epilacija je metoda, koja primenom jednosmerne i visokofrekventne struje dovodi do uništenja korena neželjenih dlačica, a izuzetno je važno da je sprovodi kvalifikovana osoba\n."+
       "Ono što naročito želimo da Vam naglasimo, je mogućnost obavljanja tretmana uz lokalnu anesteziju, koju daje lekar, a koja ne menja cenu samog tretmana.\n"+
       "Najbolji rezultati se postižu kod osoba koje imaju tamne, jake dlake i svetlu kožu. Za trajne ili trajnije efekte, potrebno je uraditi 5-7 tretmana (1 tretman mesečno). Ono što je važno da znate i da ispoštujete da bi osigurali uspeh tretmana je sledeće:\n"+
       "Najmanje 2-3 nedelje pre tretmana, dlake se ne smeju izbeljivati, čupati pincetom niti depilirati voskom. Jedino se mogu uklanjati samo sa površine kože (makazicama, brijačem ili depil kremom).\n"+
       "Najmanje 2 nedelje pre i posle epilacije laserom se ne savetuje izlaganje suncu, niti koristiti solarijum, a ako se sunce ipak ne može izbeći (kao u letnjim mesecima), obavezno koristite SPF 35+.\n"+
       "Zbog fotosenzitivnosti, nikako ne treba primenjivati laser u toku terapije A-vitaminom, antibiotske i hormonalne terapije... zatim tokom primene AHA kiselina i drugih sredstava koja dovode do lokalne iritacije kože. Najbolje je pratiti uputstvo leka koji se koristi u terapiji, te ako je istaknuto da može dovesti do fotosenzitivnosti, savet je da se epilacija laserom izbegava.",
      kolicina: 0,
      slika: slika4
    },
    {
      id:5,
      naziv: "Nadogradnja trepavica",
      kratak_opis:"Svilene trepavice se apliciraju na svaku Vašu trepavicu ponaosob, čime...",
      opis: "Svilene trepavice (sastavljene iz snopa koji čine 3 trepavice) se apliciraju na svaku Vašu trepavicu ponaosob, čime se postiže ekstenzija trepavica, ali i značajno povećanje volumena. Osim što daju potpuno novi izgled Vašem oku, one štite Vaše prirodne trepavice i ne oštećuju ih (vrlo su lagane i odlično se podnose). \nKorekcija je obično na 2-4 nedelje."+
      "O načinu nege Vaših i nadogradjenih trepavica, kako bi što duže trajale, ispričaće Vam naši članovi tima po završenom tretmanu, koji traje oko 1-2h (u zavisnosti od gustine Vaših trepavica, kao i od volumena koji želite da dobijete).",
      kolicina: 0,
      slika: slika5
    }
  ]);

  function refreshZakazani(){
    let noveUsluge = usluge.filter((usl)=>usl.kolicina>0);
    setZakazaniTermini(noveUsluge);
  }

  function dodajRezervaciju(naziv, id){
    setBrojTermina(brojTermina+1);
    console.log(brojTermina);
    usluge.forEach((usl)=>{
      if(usl.id===id){
        usl.kolicina++;
      }
    });
    refreshZakazani();
  }


  return (
  <BrowserRouter className="App">
    <NavBar brojTermina={brojTermina}></NavBar>
    <Routes>
      <Route path="/" element={<Usluge usluge={usluge} dodajRezervaciju={dodajRezervaciju} />}/>
      <Route path="/appointments*" element={<MyAppointments usluge={zakazaniTermini}/>}/>
      <Route path='/detaljnije' element={<Detaljnije/>}></Route>
    </Routes>
    
   
  </BrowserRouter>
  );

}

export default App;
