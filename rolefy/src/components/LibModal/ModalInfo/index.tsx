import React, { ReactNode, useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import type * as CSS from "csstype";
import { useState } from "react";
import api from "../../../services/api";
import { number } from "yup";
import { LoginContext } from "../../../context/Login";

interface iModalFav {
  subtitle: string;
  style: CSS.Properties;
}

interface iAvaliation {
  stars?: number | null;
  comments?: string;
  children: ReactNode;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  } as CSS.Properties,
};

function ModalFav({ children }: iAvaliation) {
  let subtitle: iModalFav;
  const { value, setValue } = useContext(LoginContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [comment, setComment] = useState<string>();
  const [avaliation, setAvaliation] = useState<iAvaliation>();

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
      <button onClick={openModal} className="btnOpen">
        Adicionar comentário
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Box
          sx={{
            "& > legend": { mt: 3 },
            backgroundColor: "#534E4E",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
            width: 300,
            height: 300,
          }}
        >
          <Typography
            component="legend"
            className="modalAvaliation-title"
            sx={{
              color: "#fff",
            }}
          >
            Avalie o local do seu rolê:
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              event.preventDefault;
              setValue(newValue);
            }}
          />
          <textarea
            placeholder="Adicione um Comentário"
            onChange={(e) => {
              e.preventDefault();
              const newComment: string = e.target.value;
              setComment(newComment);
            }}
          />
        </Box>
        {children}
      </Modal>
    </div>
  );
}

export default ModalFav;
