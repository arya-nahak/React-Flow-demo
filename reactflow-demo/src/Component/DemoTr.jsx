import React, { useState } from "react";
import "../assets/DemoTr.css";
import DropDownTr from "./DropDownTr";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalTr from "./ModalTr";

const DemoTr = ({ id,data}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="card">
        <div className="top-container">
          <img
            src="https://i.imgur.com/G1pXs7D.jpg"
            className="img-fluid profile-image"
            width="40"
          />
          <div className="ml-3" style={{ marginLeft: "10px" }}>
            <h5 className="name">{data.name}</h5>
            <p className="mail">{data.email}</p>
          </div>
          {/* <div className=""> */}
          {/* </div> */}
        </div>
        <DropDownTr setModal={setModal} />
        {/* <div className="recent-border ">
          <span className="recent-designation">Director</span>
        </div> */}
      </div>
      <ModalTr modal={modal} id={id} setModal={setModal} />
    </>
  );
};

export default DemoTr;
