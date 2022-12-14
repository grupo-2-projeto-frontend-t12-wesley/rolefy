import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { fireDataBase } from "../../services/fireBase/ApiStart";
import ButtonNav from "../../components/ButtonNav";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IComments {
  message: string;
  userId: string;
}

interface IMessage {
  Comments: IComments[];
  userId: string;
  empriseId: string;
  image: string;
  name: string;
  userName: string;
  userImage: string;
}

function Message() {
  const { places } = useContext(LoginContext);

  const navigate = useNavigate();

  const userId = window.localStorage.getItem("@idUser");

  const [messageArray, setMessageArray] = useState<IMessage[]>([]);

  const [messageArrayClient, setMessageArrayClient] = useState<IMessage[]>([]);

  useEffect(() => {
    const q = query(
      collection(fireDataBase, "chats"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const message: IMessage[] = [];
      querySnapshot.forEach((doc) => {
        message.push(doc.data() as IMessage);
      });

      setMessageArray(message);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(fireDataBase, "chats"),
      where("empriseId", "==", userId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messageArrayClient: IMessage[] = [];
      querySnapshot.forEach((doc) => {
        messageArrayClient.push(doc.data() as IMessage);
      });

      setMessageArrayClient(messageArrayClient);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Conteiner>
      <button onClick={() => navigate("/isLoged")} className="voltar">
          <AiOutlineArrowLeft /> Voltar
        </button>

        <div className="contact">
          {messageArray.map((resp: IMessage, index: number) => {
            const comment = resp.Comments[resp.Comments.length - 1].message;

            return (
              <a href={`/chat/${resp.empriseId}`} key={index}>
                <h1>Mensagens</h1>
                <div className="messageConteiner">
                  <figure>
                    <img src={resp.image} alt={resp.name} />
                  </figure>
                  <div className="infoMessage">
                    <p>{resp.name}</p>

                    <p className="comment">{comment}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="contact">
          {messageArrayClient?.map((resp: IMessage, index: number) => {
            const comment = resp.Comments[resp.Comments.length - 1].message;

            return (
              <a href={`/chatCompany/${resp.userId}`} key={index}>
                <div className="messageConteiner">
                  <figure>
                    <img src={resp.image} alt={resp.name} />
                  </figure>
                  <div className="infoMessage">
                    <p>{resp.name}</p>

                    <p className="comment">{comment}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Conteiner>
    </motion.div>
  );
}

export default Message;
