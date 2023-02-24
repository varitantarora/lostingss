import "./Contact.css";
import myImage from "../../media/my-image1.JPG";
import myImage1 from "../../media/Shivam.jpeg";
const Contact = (props) => {
  return (
    <div className="contact">
        <div><h1 className="contact-heading">About Us</h1></div>
      <div className="cardd">
        <div className="contact-text"><h6>Lostings is a web application where you can report lost or found items and look for the items reported by others.Lostings is here to ensure all lost items are returned to their rightful owners in a timely and efficient manner.</h6></div>
        <div className="contact-image">
            <div className="person">
            <img className="imgg" src={myImage}></img>
            <span className="imgg-text"><p>Varitant<br/>varitanta@gmail.com<br/>8059909343</p></span>
            </div>
            {/* <div className="person">
            <img className="imgg" src={myImage1}></img>
            <span className="imgg-text"><p>Shivam<br/>shivam.sa@gmail.com<br/>7056456578</p></span>
            </div> */}
            
        </div>
      </div>
    </div>
  );
};
export default Contact;
