import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_EzjInkjOwPnMR4xkHkTHh");

function App() {
  const frmContact = {
    userEmail: "",
    emailTitle: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_4yqyk86",
        contact,
        "user_EzjInkjOwPnMR4xkHkTHh"
      )
      .then(
        (response) => {
          console.log(response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <>
      <div className="App">
        <form>
          <div className="pt-3">
            <h3 className="font-weight-bold"> Contact Us !! </h3>
          </div>
          <div className="pt-3 col-md-5 mx-auto">
            <div className="form-group text-left">
              {" "}
              <b>Your Email</b> <br />
              <input
                required
                type="text"
                value={contact.userEmail}
                name="userEmail"
                onChange={handleChange}
                className="form-control"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="pt-3 col-md-5 mx-auto">
            <div className="form-group text-left">
              {" "}
              <b>Title</b> <br />
              <input
                value={contact.emailTitle}
                required
                type="text"
                name="emailTitle"
                onChange={handleChange}
                className="form-control"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="pt-3 col-md-5 mx-auto">
            <div className="form-group text-left">
              {" "}
              <b>Describe your concerns</b> <br />
              <textarea
                required
                name="emailDetails"
                onChange={handleChange}
                className="form-control"
                placeholder="Describe your concerns"
                value={contact.emailDetails}
              ></textarea>
            </div>
          </div>
          <div className="pt-3 col-md-5 mx-auto text-left">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
