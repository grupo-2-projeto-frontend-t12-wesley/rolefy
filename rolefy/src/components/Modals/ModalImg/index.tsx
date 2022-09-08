import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import type * as CSS from "csstype";
import { useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { LoginProvider, LoginContext,  } from "../../../context/Login";
import { ImgPlace } from "./imageStyle";

interface ModalImg {
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

function ModalImg() {
  const { imagePlace } = useContext(LoginContext)

  let subtitle: ModalImg;
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
    <ImageList sx={{ width: 300, height: 350 }} cols={1} rowHeight={82}>
      {imagePlace.map((place) => (
        <ImageListItem key={place}>
          <ImgPlace
            src={`${place}?w=164&h=164&fit=crop&auto=format`}
            alt="Imagem do estabelecimento"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        
</Modal>
    </div>
  );
}

export default ModalImg;


