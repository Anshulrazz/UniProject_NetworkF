import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
import Troubleshoot from "./components/Documentation/Troubleshho";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Terms from "./components/t&c/Terms"
import DDocs from "./components/Documentation/DDocs";
import Contact from "./components/Contact/Contact";
import ViewAPIDocs from "./components/Documentation/Viewapi";
import ViewUserGuide from "./components/Documentation/ViewUserGuide";
import SServices from "./components/Services/UServices";
import PageNotFound from "./pages/PageNotFound";
import Abot from "./components/About/Abot";
import Events from "./components/Events/Event";
import LicenseAgreement from "./LicienceAgreement";
import UserDashboard from "./components/Dashbord/UserDashboard";
import LoginComponent from "./components/Login/LoginComponent";
import AdminDashboard from "./components/Admin/AdminDashbord";
import SignUp from "./components/Login/SignUp";
import AuthMiddleware from './components/middleware/AuthMiddleware'; // Adjusted path
// import { AuthProvider } from './components/Contaxt/AuthContext'; // Adjusted path
import PostADoc from "./components/Dashbord/PostADoc";
import { AuthProvider } from "./components/Contaxt/AuthContext";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/troubleshoot" element={<Troubleshoot />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/docs" element={<DDocs />} />
          <Route path="/about" element={<Abot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/view-api" element={<ViewAPIDocs />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/user-guide" element={<ViewUserGuide />} />
          <Route path="/services" element={<SServices />} />
          <Route path="/license" element={<LicenseAgreement />} />
          <Route path="/event" element={<Events />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route
            path="/dashbord"
            element={
              <AuthMiddleware>
                <UserDashboard />
              </AuthMiddleware>
            }
          />
          <Route
            path="/admin-dashbord"
            element={
              <AuthMiddleware adminRequired={true}>
                <AdminDashboard />
              </AuthMiddleware>
            }
          />
          <Route path="/postDoc"
            element={
              <AuthProvider>
                <PostADoc />
              </AuthProvider>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
