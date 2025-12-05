import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Overview from "../pages/Overview";
import LeadingBanks from "../pages/LeadingBanks";
import Login from "../pages/Login";
import Categori from "../pages/Categori";
import Help from "../pages/Help";
import FAQ from "../pages/FAQ";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../Layout";
import Register from "../pages/Register";
import Student from "../pages/students/Student";
const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadingbanks" element={<LeadingBanks />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/categori" element={<Categori />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<Help />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/student_dashboard" element={<Student />}></Route>
    </Routes>

    // <Route>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    // </Route>

    // <Route path="/login" element={<Login />} />
    // <Route path="/register" element={<Register />} />
  );
};

export default MainRoutes;
