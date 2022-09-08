import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/Login";
import { Conteiner } from "./styled";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { fireDataBase } from "../../services/fireBase/ApiStart";
import ButtonNav from "../../components/ButtonNav";

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
    <Conteiner>
      <button
        onClick={() => {
          navigate("/isLoged");
        }}
      >
        Voltar
      </button>

      <h1>message</h1>

      <div className="contact">
        {messageArray.map((resp: IMessage, index: number) => {
          const comment = resp.Comments[resp.Comments.length - 1].message;

          return (
            <a href={`/chat/${resp.empriseId}`} key={index}>
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
        <h2>Meus clientes</h2>

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
      <ButtonNav />
    </Conteiner>
  );
}

export default Message;
