import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinkedEntities } from "./components/LinkedEntities/LinkedEntities";
import { Characters } from "./pages/Characters";
import { ErrorPage } from "./pages/ErrorPage";
import { Vehicles } from "./pages/Vehicles";
import { Planets } from "./pages/Planets";
import { CharacterDetails } from "./pages/CharacterDetails";
import { VehicleDetails } from "./pages/VehicleDetails";
import { HomeworldDetails } from "./pages/HomeworldDetails";
import classes from "./App.module.scss";

export function App() {
  return (
    <div className={classes.container}>
      <Router>
        <LinkedEntities />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/people/:id" element={<CharacterDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<HomeworldDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}
