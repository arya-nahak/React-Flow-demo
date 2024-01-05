import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const createNode = (id, name, email, x, y) => {
  return {
    id: `${id}`,
    type: "textUpdater",
    position: { x: x, y: y },
    data: { name: name, email: email, value: "123", backgroundColor: "black" },
  };
};

const createEdge = (parentId, id) => {
  return {
    id: `${parentId}-${id}`,
    type: "smoothstep",
    animated: true,
    source: parentId,
    target: id,
    sourceHandle: "b",
    targetHandle: "a",
  };
};

function ModalTr({ args, modal, setModal, id }) {
  const dispatch = useDispatch();
  const getdatas = useSelector((y) => y.data);

  console.log(getdatas, "mddd");

  const [userData, setUserData] = useState({
    parentId: id,
    name: "",
    email: "",
  });

  const herd = getdatas.nodes.find((y) => y.id === id).position;

  console.log(herd, "ggggggggggg");

  const submitHandler = () => {
    let node = createNode(
      getdatas.nodes.length + 1,
      userData.name,
      userData.email,
      herd.x + 50,
      herd.y + 50
    );

    let edge = createEdge(userData.parentId, node.id);

    console.log(".new data...", node, edge);
    dispatch({ type: "ADDDATA", payload: { nodes: node, edges: edge } });
  };

  const toggle = () => setModal(!modal);
  console.log("userData", getdatas);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input
            type="text"
            name="name"
            className="w-100"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          ></input>
          <input
            type="text"
            name="email"
            className="w-100 mt-2"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          ></input>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              //   toggle,
              submitHandler();
            }}
          >
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalTr;
