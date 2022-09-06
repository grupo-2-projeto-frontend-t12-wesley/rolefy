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
import { Img, CardRate, StarRate, Commentary } from "./rateStyle";

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
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: 'transparent',
    border: 'none',
  } as CSS.Properties,
};

function ModalRate() {
  const { places, favPlaces } = useContext(LoginContext);

  let subtitle: ModalRate;
  const [modalIsOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState<number | null>(2);
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
          <h1>Teste</h1>
          {places.length > 0 ? (
            places.map((place) => (
              <CardRate key={place.id}>
              <StarRate>&#11088;&#11088;&#11088;&#11088;&#11088;</StarRate>
              <Commentary>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</Commentary>
            </CardRate>
            ))
          ) : (
            <div>nenhum resultado encontrado</div>
          )}
          ;
        </Box>
      </Modal>
    </div>
  );
}

export default ModalRate;
