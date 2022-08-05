import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MdHome, MdSettings, MdEmail, MdInfo, MdWeb } from "react-icons/md";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Blog from "./Pages/Blog";
import Breadcrumb from "./Components/Breadcrumb";

const Separator = ({ children, ...props }) => (
  <span style={{ color: "blue" }} {...props}>
    {children}
  </span>
);

const options = {
  icons: {
    Home: MdHome,
    Dashboard: MdSettings,
    Contact: MdEmail,
    About: MdInfo,
    Blog: MdWeb
  },
  items: [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" }
  ]
};

const App = () => (
  <div>
    <Breadcrumb separator={<Separator>/</Separator>}>
      {options.items.map(({ to, label }) => {
        const Icon = options.icons[label];
        return (
          <div key={to} className="some-custom-classname">
            {Icon && <Icon />}
            <Link to={to}>{label}</Link>
          </div>
        );
      })}
    </Breadcrumb>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </div>
);

export default App;