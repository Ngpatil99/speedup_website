import React from "react";
import Swal from "sweetalert2";
import { Input } from "semantic-ui-react";

import emailjs from "emailjs-com";

function Enform() {
  const SERVICE_ID = "service_k24iggk";
  const TEMPLATE_ID = "template_y5e25lk";
  const PUBLIC_KEY = "5SA8v41g5-WM58FPz";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div>
      <form className="enquiryform" onSubmit={handleOnSubmit}>
        <h3>Enquiry Form</h3>
        <input
          type="text"
          placeholder="Name"
          className="enquiryforminput"
          id="form-input-control-last-name"
          control={Input}
        />
        <input
          type="number"
          placeholder="Phone"
          id="usercontact"
          className="enquiryforminput"
        />
        <input
          type="text"
          placeholder="Email or Phone"
          id="form-input-control-email"
          className="enquiryforminput"
        />
        <input
          type="text"
          placeholder="Location"
          id="location"
          className="enquiryforminput"
        />

        <button className="enquiryformbutton">Submit</button>
       
      </form>
    </div>
  );
}

export default Enform;
