import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              How it works:
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">

          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              License
            </h5>
            <ul className="list-unstyled">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/journeycruz/React_Employee_Directory/blob/master/LICENSE">MIT License</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              API
            </h5>
            <ul className="list-unstyled">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://randomuser.me/">Random User Generator</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/journeycruz" className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:journey.cruz@gmail.com" className="btn-floating btn-sm btn-tw mx-1">
              <i className="fa fa-envelope"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/journey-cruz-32a0a695" className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-linkedin"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a target="_blank" rel="noopener noreferrer" href="https://journeycruz.github.io/WebDevPortfolio/"> Journey Cruz </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;