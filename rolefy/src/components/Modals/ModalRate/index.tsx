import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import type * as CSS from "csstype";
import { useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { LoginProvider, LoginContext } from "../../../context/Login";
import { MdlRate } from "./rateStyle";

interface ModalRate {
  subtitle: string;
  style: CSS.Properties;
}

interface iAvaliation {
  stars?: number | null;
  comments?: string;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: "300px",
    transform: "translate(-50%, -50%)",
    padding: "0",
  } as CSS.Properties,
};

function ModalRate() {
  let subtitle: ModalRate;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0);
  const [comment, setComment] = useState<string>();
  const [avaliation, setAvaliation] = useState<iAvaliation>();

  function newAvaliation() {
    setAvaliation({
      stars: value,
      comments: comment,
    });
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <button onClick={openModal}>Add comentário</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <textarea />
        </Modal>
      </div>
    </div>
  );
}

export default ModalRate;
