import { Routes, Route } from "react-router-dom";
import { CharacterDetails } from "../pages/CharacterDetails";
import { Characters } from "../pages/Characters";
import { ErrorPage } from "../pages/ErrorPage";
import { HomeworldDetails } from "../pages/HomeworldDetails";
import { Planets } from "../pages/Planets";
import { VehicleDetails } from "../pages/VehicleDetails";
import { Vehicles } from "../pages/Vehicles";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/people/:id" element={<CharacterDetails />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/:id" element={<VehicleDetails />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:id" element={<HomeworldDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
