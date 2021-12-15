import React from "react";
import { Route, Redirect } from "react-router-dom";
import Amsterdam from "./components/Cities/Amsterdam";
import Batum from "./components/Cities/Batum";
import Barcelona from "./components/Cities/Barcelona";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Select from "./components/Select/Select";
import Luksemburg from "./components/Cities/Luksemburg";
import Dusseldorf from "./components/Cities/Dusseldorf";
import Paris from "./components/Cities/Paris";
import Bruksel from "./components/Cities/Bruksel";
import Brugge from "./components/Cities/Brugge";
import RodosAdası from "./components/Cities/RodosAdası";
import SakızAdası from "./components/Cities/SakızAdası";
import MeisAdası from "./components/Cities/MeisAdası";
import KosAdası from "./components/Cities/KosAdası";
import SamosAdası from "./components/Cities/SamosAdası";
import Belgrad from "./components/Cities/Belgrad";
import Trier from "./components/Cities/Trier";
import Roma from "./components/Cities/Roma";
import Napoli from "./components/Cities/Napoli";
import Floransa from "./components/Cities/Floransa";
import Pisa from "./components/Cities/Pisa";
import BuranoAdası from "./components/Cities/BuranoAdası";
import MuranoAdası from "./components/Cities/MuranoAdası";
import Venedik from "./components/Cities/Venedik";
import Milano from "./components/Cities/Milano";
import Montecatini from "./components/Cities/Montecatini";
import Siena from "./components/Cities/Siena";
import SanGimignano from "./components/Cities/SanGimignano";

function App() {
  return (
    <div>
      <Route path="/">
        <Redirect to="/home" />
        <Header />
      </Route>
      <Route path="/home">
        <Main />
        <Footer />
      </Route>
      <Route path="/select">
        <Select />
        <Footer />
      </Route>
      <Route path="/Batum">
        <Batum />
        <Footer />
      </Route>
      <Route path="/Amsterdam">
        <Amsterdam />
        <Footer />
      </Route>
      <Route path="/Barcelona">
        <Barcelona />
        <Footer />
      </Route>
      <Route path="/Lüksemburg">
        <Luksemburg />
        <Footer />
      </Route>
      <Route path="/Düsseldorf">
        <Dusseldorf />
        <Footer />
      </Route>
      <Route path="/Paris">
        <Paris />
        <Footer />
      </Route>
      <Route path="/Brüksel">
        <Bruksel />
        <Footer />
      </Route>
      <Route path="/Brugge">
        <Brugge />
        <Footer />
      </Route>
      <Route path="/Rodos Adası">
        <RodosAdası />
        <Footer />
      </Route>
      <Route path="/Sakız Adası">
        <SakızAdası />
        <Footer />
      </Route>
      <Route path="/Meis Adası">
        <MeisAdası />
        <Footer />
      </Route>
      <Route path="/Kos Adası">
        <KosAdası />
        <Footer />
      </Route>
      <Route path="/Samos Adası">
        <SamosAdası />
        <Footer />
      </Route>
      <Route path="/Belgrad">
        <Belgrad />
        <Footer />
      </Route>
      <Route path="/Trier">
        <Trier />
        <Footer />
      </Route>
      <Route path="/Roma">
        <Roma />
        <Footer />
      </Route>
      <Route path="/Napoli">
        <Napoli />
        <Footer />
      </Route>
      <Route path="/Floransa">
        <Floransa />
        <Footer />
      </Route>
      <Route path="/Pisa">
        <Pisa />
        <Footer />
      </Route>
      <Route path="/Burano Adası">
        <BuranoAdası />
        <Footer />
      </Route>
      <Route path="/Murano Adası">
        <MuranoAdası />
        <Footer />
      </Route>
      <Route path="/Venedik">
        <Venedik />
        <Footer />
      </Route>
      <Route path="/Milano">
        <Milano />
        <Footer />
      </Route>
      <Route path="/Montecatini">
        <Montecatini />
        <Footer />
      </Route>
      <Route path="/Siena">
        <Siena />
        <Footer />
      </Route>
      <Route path="/San Gimignano">
        <SanGimignano />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
