import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ModalTr from "./ModalTr";

function DropDownTr({ direction,setModal, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  //   const [modal, setModal] = useState(false);

  //   const toggle = () => setModal(!modal);

  return (
    <>
      <Dropdown
       isOpen={dropdownOpen}
        toggle={toggle}
        >
        <DropdownToggle caret>...</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={()=>setModal(true)}>Add</DropdownItem>
          <DropdownItem>Edit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    
    </>
  );
}

export default DropDownTr;
