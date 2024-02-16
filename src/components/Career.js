import React from "react";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import Applynow from "./Applynow";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Career() {
  const nav1 = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section id="services" class="services section-bg ">
        <div class="container" data-aos="fade-up">
          <div className="row position-relative py-5 d-flex flex-column align-items-center">
            <div className="position-relative ourwork-header py-3">
              <div className="benefit-underline-career">
                <h6 className="benefit-career">CAREER</h6>
              </div>
            </div>
            <div className="col-lg-12">
              <h2 className="fs-2 text-white text-center py-2">
                Lets work and make things work. Our success is yours!!! "
              </h2>
            </div>
          </div>
          <div class="row mx-5">
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                <h4>
                  <a href="#">React Js Internship in Pune</a>
                </h4>
                <p>
                  Job Description: Maxgen technologies pvt ltd offering
                  internships in pune .the interns will get live project
                  internships in react js and frontend development.why we are
                  top choice?committed to... More Details.
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                <h4>
                  <a href="#">
                    Node JS Developer Xtensible Software Technologies Pvt. Ltd.
                  </a>
                </h4>
                <p>
                  Job Description: Job summary Skills Proficient with backend
                  technologies. Working knowledge of Nodejs , ExpressJS ,
                  Socket.io , Redis. Should be aware of Code standards. Hands-on
                  experienc...
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <h4>
                  <a href="#">
                    Full Stack Developer Scriptshub Technologies Global{" "}
                    <br></br>
                  </a>
                </h4>
                <p>
                  As a Senior Full Stack Developer at Scriptshub, you will lead
                  the design, development, and maintenance of web applications
                  and services.utilizing your expertise in React.js, Node.js,
                  and PostgreSQL to deliver high-quality.
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                {" "}
                <h4>
                  <a href="#">
                    {" "}
                    React js developer job Urgently Hiring for the Position of
                    React Js Developer (Training will be provided)
                  </a>
                </h4>
                <p>
                  0 - 1 Year Depends Upon Interview Ahmedabad, Pune, Mumbai Job
                  Description: Maxgen technologies pvt ltd offering internships
                  in pune
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                <h4>
                  <a href="#">React Js Internship in Pune</a>
                </h4>
                <p>
                  Job Description: Maxgen technologies pvt ltd offering
                  internships in pune .the interns will get live project
                  internships in react js and frontend development.why we are
                  top choice?committed to... More Details.
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                <h4>
                  <a href="#">
                    Node JS Developer Xtensible Software Technologies Pvt. Ltd.
                  </a>
                </h4>
                <p>
                  Job Description: Job summary Skills Proficient with backend
                  technologies. Working knowledge of Nodejs , ExpressJS ,
                  Socket.io , Redis. Should be aware of Code standards. Hands-on
                  experienc... More Details KeySkills: cache , css , mysql ,
                  html
                </p>
                <a href="#" class="animated-button1" onClick={handleShow}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Modal show={show} onHide={handleClose} className="modal-lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="jobform-model">
              <Applynow />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default Career;
