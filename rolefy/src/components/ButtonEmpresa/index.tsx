import { useState } from "react";
import ModalImg from "../Modals/ModalImg";
import ModalImage from "../Modals/ModalImg";
import ModalInfo from "../Modals/ModalInfo";

import ModalRate from "../Modals/ModalRate";
import { ContainerMain } from "./BtnEmpresaStyle";

export interface IButtonEmpresa {
  isImage: boolean;
  setIsImage: React.Dispatch<React.SetStateAction<boolean>>;
  isRate: boolean;
  setIsRate: React.Dispatch<React.SetStateAction<boolean>>;
  isInfo: boolean;
  setIsInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonBusiness() {
  const [isImage, setIsImage] = useState(false);
  const [isRate, setIsRate] = useState(false);
  const [isInfo, setIsInfo] = useState(false);

  function showImage() {
    setIsImage((oldIsImage) => !oldIsImage);
    setIsRate(false);
    setIsInfo(false);
  }
  function showRate() {
    setIsRate((oldIsRate) => !oldIsRate);
    setIsImage(false);
    setIsInfo(false);
  }
  function showInfo() {
    setIsInfo((oldIsInfo) => !oldIsInfo);
    setIsImage(false);
    setIsRate(false);
  }

  function closeAll() {
    setIsImage(false);
    setIsRate(false);
    setIsInfo(false);
  }

  return (
    <ContainerMain>
      <div className="containerBtn">
        <button className="BtnImg" onClick={showImage}>
          Imagens
        </button>
        <button className="BtnInfo" onClick={showInfo}>
          Informações
        </button>
      </div>

      {isImage && <ModalImg />}
      {isInfo && <ModalInfo />}
    </ContainerMain>
  );
}

export default ButtonBusiness;
