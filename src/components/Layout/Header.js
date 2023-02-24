import { Fragment } from "react";
import Navbar from "./Navbar";
// import { useState } from "react";
const Header = props =>{
    // const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
        <Fragment>
        {/* <p>this is my lost and found website.</p>
        <h1>LOSTINGS</h1>  */}
         <Navbar onShowAuthForm={props.onShowAuthForm}/>   
         

       

        </Fragment>
    );
    

};
export default Header;