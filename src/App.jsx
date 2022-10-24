import "./App.css";
import Home from "./component/home/Home";
import { Routes, Route } from "react-router-dom";

import Event from "./component/event/Event";
import Sponsor from "./component/sponsors/Sponsor";
import Contact from "./component/contact/Contact";
import SharedLayout from "./component/Shared/Layout";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 11000);
  }
  return (
    !loading && (
      <div className="app">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="event" element={<Event />} />
            <Route path="sponsors" element={<Sponsor />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    )
  );
}

export default App;
