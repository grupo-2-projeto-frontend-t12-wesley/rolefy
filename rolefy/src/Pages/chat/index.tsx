import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fireDataBase } from "../../services/fireBase/ApiStart";
import { Conteiner } from "./styled";

import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { LoginContext } from "../../context/Login";

export interface IMessage {
  message: string;
  userId: string;
}

function Chat() {
  const { places } = useContext(LoginContext);

  const empriseId = useParams();

  const userInfo = JSON.parse(window.localStorage.getItem("@userInfo")!);

  const userId = window.localStorage.getItem("@idUser");

  const [input, setInput] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(fireDataBase, "chats", `${userId}${empriseId.id}`),
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

    //@ts-ignore
    const empriseData = places.find((resp) => empriseId.id == resp.id);

    const resp = {
      message: input,
      userId: userId,
    };

    if (data.length == 0) {
      const newUser = {
        Comments: [resp],
        userId: userId,
        empriseId: empriseId.id,
        image: empriseData?.image,
        name: empriseData?.name,
        userName: userInfo.name,
        userImage: userInfo.image,
      };

      setDoc(doc(fireDataBase, "chats", `${userId}${empriseId.id}`), newUser);
    } else {
      setDoc(
        doc(fireDataBase, "chats", `${userId}${empriseId.id}`),
        {
          Comments: [...data, resp],
        },
        { merge: true }
      );
    }
  }

  return (
    <Conteiner>
      <button onClick={() => history.back()}>Voltar</button>

      <h1>Chat</h1>

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
    </Conteiner>
  );
}

export default Chat;
