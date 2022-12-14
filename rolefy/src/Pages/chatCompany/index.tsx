import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fireDataBase } from "../../services/fireBase/ApiStart";
import { Conteiner } from "./styled";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { IMessage } from "../chat";
import ButtonNav from "../../components/ButtonNav";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ChatCompany() {
  const clientId = useParams();
  console.log(clientId);
  const userId = window.localStorage.getItem("@idUser");
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fireDataBase, "chats", `${clientId.id}${userId}`),
      (doc) => {
        if (doc.data() == undefined) {
        } else {
          setData(doc.data()!.Comments);
        }
      }
    );

    return () => unsub();
  }, []);

  useEffect(() => {
    const chatDiv = document.querySelector(".chat") as HTMLDivElement;
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, [data]);

  function formSubmit(e: React.FormEvent) {
    e.preventDefault();
    const resp = {
      message: input,
      userId: userId,
    };
      
    setDoc(
      doc(fireDataBase, "chats", `${clientId.id}${userId}`),
      {
        Comments: [...data, resp],
      },
      { merge: true }
    );
  }
  const navigate = useNavigate();
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Conteiner>
      <button onClick={() => navigate("/message")} className="return">
        <AiOutlineArrowLeft />
      </button>
        <div className="chat">
          {data?.map((resp: IMessage, index) => {
            if (resp.userId == userId) {
              return (
                <div
                  className="
                Message ownMessage"
                  key={index}
                >
                  <p>{resp.message}</p>
                </div>
              );
            } else {
              return (
                <div
                  className="
                Message anotherUser"
                  key={index}
                >
                  <p>{resp.message}</p>
                </div>
              );
            }
          })}
        </div>
        <form onSubmit={(e) => formSubmit(e)}>
          <input
            type="text"
            onChange={(resp: React.ChangeEvent<HTMLInputElement>) =>
              setInput(resp.target.value)
            }
          />
          <button>Enviar</button>
        </form>
        <ButtonNav />
      </Conteiner>
    </motion.div>
  );
}

export default ChatCompany;
