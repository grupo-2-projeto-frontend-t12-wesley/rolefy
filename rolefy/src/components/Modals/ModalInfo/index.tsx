import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import type * as CSS from "csstype";
import { useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { LoginProvider, LoginContext } from "../../../context/Login";
import { InfoCard } from "./infoStyle";

interface ModalInfo {
  subtitle: string;
  style: CSS.Properties;
}

interface IInfo {
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
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: 'transparent',
    border: 'none',
  } as CSS.Properties,
};

function ModalInfo() {
  const { infoPlace } = useContext(LoginContext);

  let subtitle: ModalInfo;
  const [modalIsOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState<number | null>(2);
  const [comment, setComment] = useState<string>();
  const [avaliation, setAvaliation] = useState<IInfo>();

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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Box
        sx={{
          "& > legend": { mt: 3 },
          backgroundColor: 'transparent',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
          width: 300,
          height: 300,
        }}
        >
          <InfoCard>
                <p>
                {infoPlace}
                </p>
              </InfoCard>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
