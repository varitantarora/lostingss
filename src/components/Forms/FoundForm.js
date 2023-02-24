import useInput from "../../hooks/use-input";
import validator from "validator";
import "./Form.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";
// const islocation = (value) => value.includes('@');
const isValidDate = (value) => validator.isDate(value);


const FoundForm = (props) => {
  const [link, setLink] = useState("");
const [file, setFile] = useState(null);

  const [progress, setProgress] = useState(0);
  const {
    value: itemNameValue,
    isValid: itemNameIsValid,
    hasError: itemNameHasError,
    valueChangeHandler: itemNameChangeHandler,
    inputBlurHandler: itemNameBlurHandler,
    reset: resetItemName,
  } = useInput(isNotEmpty);
  const {
    value: colorValue,
    isValid: colorIsValid,
    hasError: colorHasError,
    valueChangeHandler: colorChangeHandler,
    inputBlurHandler: colorBlurHandler,
    reset: resetColor,
  } = useInput(isNotEmpty);
  const {
    value: locationValue,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: resetLocation,
  } = useInput(isNotEmpty);
  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isValidDate);

  let formIsValid = false;

  if (itemNameIsValid && colorIsValid && locationIsValid && dateIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(itemNameValue, colorValue, locationValue);

    fetch(
      "https://lostandfound-cf220-default-rtdb.firebaseio.com/foundItems.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: itemNameValue,
          color: colorValue,
          location: locationValue,
          date: dateValue,
          image:link
        }),
      }
    );

    resetItemName();
    resetColor();
    resetLocation();
    resetDate();
  };

  const itemNameClasses = itemNameHasError
    ? "form-control invalid"
    : "form-control";
  const colorClasses = colorHasError ? "form-control invalid" : "form-control";
  const locationClasses = locationHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";

  const handleChange = (e) => {
    e.preventDefault();

    setFile(e.target.files[0]);
    uploadFiles();
  };

  const uploadFiles = () => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async (url) =>
          setLink(url)
        );
      }
    );
  };

  return (
    <Modal onClose={props.onClose}>
    <form className="my-form" onSubmit={submitHandler}>
      <h2 className="form-label">Found Items Form</h2>
      <div className="form-container">
        <ul>
      <div className="control-group">
        <li>
        <div className="grid grid-2">
        <div className={itemNameClasses}>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            value={itemNameValue}
            onChange={itemNameChangeHandler}
            onBlur={itemNameBlurHandler}
          />
          {itemNameHasError && (
            <p className="error-text">Please enter a item name.</p>
          )}
          {!itemNameHasError && (
            <p><br/></p>
          )}
        </div>
        <div className={colorClasses}>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            value={colorValue}
            onChange={colorChangeHandler}
            onBlur={colorBlurHandler}
          />
          {colorHasError && <p className="error-text">Please enter a color.</p>}
          {!colorHasError && (
            <p><br/></p>
          )}
        </div>
        </div>
        </li>
        <li>
        <div className="grid grid-2">
        <div className={locationClasses}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={locationValue}
            onChange={locationChangeHandler}
            onBlur={locationBlurHandler}
          />
          {locationHasError && (
            <p className="error-text">Please enter a valid location.</p>
          )}
          {!locationHasError && (
            <p><br/></p>
          )}
        </div>
        <div className={dateClasses}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={dateValue}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {dateHasError && (
            <p className="error-text">Please enter a valid Date.</p>
          )}
          {!dateHasError && (
            <p><br/></p>
          )}
        </div>
        </div>
        </li>
      </div>
      <li>
            <div>
          <label >Image of Item</label>
          <br />
          <input
            type="file"
            onChange={handleChange}
            required
            // className={classes.input}
          />
          <button onClick={uploadFiles}>upload</button>
          <h5>Upload {progress}%</h5>

          {/* <input type="url" required className={classes.input} ref={imageRef} /> */}
        </div>
            </li>
        

      <div className="grid grid-3 form-actions">
        <Button type="submit" className="btn-grid" disabled={!formIsValid} on>Submit</Button>
      </div>
      </ul>
      </div>
    </form>
    </Modal>
  );
};

export default FoundForm;
