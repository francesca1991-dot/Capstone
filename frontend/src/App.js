import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

//import component
import Header from "./components/Header/Header.component.jsx";
import Farm from "./components/Farm/Farm.component.jsx";
import PuppiesList from "./components/PuppiesList/PuppyList.component.jsx"
import Questions from "./components/Questions/Questions.component.jsx"
import Contact from "./components/Contact/Contact.component.jsx"
import Footer from "./components/Footer/Footer.component.jsx";
import Login from "./components/Login/Login.component.jsx";
import PuppyDetails from "./pages/PuppyDetails";
import FormPage from './pages/Form.pages';
import Register from './pages/Register';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Payment from './pages/Payment.page';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Farm />} />
          <Route path="/puppies" element={<PuppiesList />} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/puppy/:id" element={<PuppyDetails />} />
          <Route path="/api/form" component={FormPage} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/payment/:id" element={<Payment />} />
          
          <Route path="*" element={<div>Page not found</div>} />
           </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
