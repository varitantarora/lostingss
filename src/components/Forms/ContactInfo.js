import Modal from "../UI/Modal";
import "./Form.css";

const ContactInfo = props=>{
    return <Modal onClose={props.onClose}>
    <form className="my-form" >
      <h2 className="form-label">Contact Information</h2>
      <h3 className="form-label">Phone-8059909343</h3>
    </form>
  </Modal>
};

export default ContactInfo;