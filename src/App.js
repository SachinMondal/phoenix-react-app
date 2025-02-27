import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Events from "./pages/Events/Events";
import Clubs from "./pages/Clubs/Clubs";
import Wing from "./pages/Clubs/Wing";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contactus/Contact";
import Coreteam from "./pages/Coreteam/Coreteam";
import Gallery from "./pages/Imagegallery/Gallery";
import Blogs from "./pages/Blogs/Blogs";
import Webteam from "./pages/Webteam/Webteam";
import Layout from "./pages/Layout";
import Member from "./pages/member/Member";
import MemberRegistration from "./pages/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="wings" element={<Clubs />} />
        <Route path="wings/:wingName" element={<Wing />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="core" element={<Coreteam />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="webteam" element={<Webteam />} />
        <Route path="member" element={<Navigate to="/home" />} />
        <Route path="member/:MemId" element={<Member />} />

        <Route path="register" element={<MemberRegistration />} />
      </Route>
    </Routes>
  );
}

export default App;
