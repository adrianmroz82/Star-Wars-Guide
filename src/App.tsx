import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Characters } from "./pages/Characters";
import { CharacterDetails } from "./pages/CharacterDetails";
import { ErrorPage } from "./pages/ErrorPage";
import { VehicleDetails } from "./pages/VehicleDetails";
import { HomeworldDetails } from "./pages/PlanetDetails";
import { Vehicles } from "./pages/Vehicles";

import classes from "./App.module.scss";

export function App() {
  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people/:id" element={<CharacterDetails />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/planets/:id" element={<HomeworldDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}
