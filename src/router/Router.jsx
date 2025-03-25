import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Slaidlar from "../pages/Slidlar";
import Maruzalar from "../pages/Maruzalar";
import Amaliylar from "../pages/Amaliylar";
import MavzuSavol from "../pages/MavzuSavol";
import TarqatmaMaterial from "../pages/TarqatmaMateriallar";
import TexnikXaritalar from "../pages/TexnikXaritalar";
import PageNotFound from "../pages/PageNotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slaidlar" element={<Slaidlar />} />
      <Route path="/maruzalar" element={<Maruzalar />} />
      <Route path="/amaliylar" element={<Amaliylar />} />
      <Route path="/mavzu_savol" element={<MavzuSavol />} />
      <Route path="/tarqatma-material" element={<TarqatmaMaterial />} />
      <Route path="/texnik-xarita" element={<TexnikXaritalar />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
