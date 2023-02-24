import React,{useState} from "react";
import "./App.css";
import Content from "./components/Layout/Content";
import Header from "./components/Layout/Header";
import FoundItemsPage from "./components/Pages/FoundItems/FoundItemsPage";
import LostItemsPage from "./components/Pages/LostItems/LostItemsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LostForm from "./components/Forms/LostForm";
import FoundForm from "./components/Forms/FoundForm";
import AuthForm from "./components/Forms/AuthForm";
import Contact from "./components/Layout/Contact";
import ContactInfo from "./components/Forms/ContactInfo";


function App() {
  const [lostFormShown,setLostFormShown]=useState(false);

  const showLostFormHandler = ()=>{
    setLostFormShown(true);
  }

  const hideLostFormHandler =()=>{
    setLostFormShown(false);
  }

  const [foundFormShown,setFoundFormShown]=useState(false);

  const showFoundFormHandler = ()=>{
    setFoundFormShown(true);
  }

  const hideFoundFormHandler =()=>{
    setFoundFormShown(false);
  }
  
  const [authFormShown, setAuthFormShown]=useState(false);

  const showAuthFormHandler = ()=>{
    setAuthFormShown(true);
  }

  const hideAuthFormHandler = ()=>{
    setAuthFormShown(false);
  }

  const [contactShown, setContactShown]=useState(false);
  
  const showContactHandler = ()=>{
    setContactShown(true);
  }

  const hideContactHandler = ()=>{
    setContactShown(false);
  }


  return (
    // <Router>
      <div>
        <Header onShowAuthForm={showAuthFormHandler}></Header>
        {authFormShown && <AuthForm onClose={hideAuthFormHandler}/>}
        {lostFormShown &&  <LostForm onClose={hideLostFormHandler}/>}
        {foundFormShown &&  <FoundForm onClose={hideFoundFormHandler} />}
        {contactShown && <ContactInfo onClose={hideContactHandler}/>}
        <Routes>
          <Route path="/" element={<Content onShowLostForm={showLostFormHandler} onShowFoundForm={showFoundFormHandler} onShowContact={showContactHandler} />}></Route>
          <Route
            path="/founditems"
            element={<FoundItemsPage onClose={hideContactHandler} onShowContact={showContactHandler} />}
          ></Route>
          <Route path="/lostitems" element={<LostItemsPage onClose={hideContactHandler} onShowContact={showContactHandler} />} />
        </Routes>       
        {/* <Contact />  */}
      </div>
  //  </Router>
  );
}

export default App;
