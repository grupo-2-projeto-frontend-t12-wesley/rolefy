import { useContext, useEffect, useState } from "react";
import { number } from "yup";
import { LoginContext } from "../../context/Login";
import api from "../../services/api";

interface iProps {
  id: number;
  star: number;
}
interface iOldValue {
  setOldValue: Function;
  oldValues: iProps[];
}
const SendAvaliation = ({ id }: iProps) => {
  const { value } = useContext(LoginContext);
  const userId: string = localStorage.getItem("@userId") || "";
  const [oldValue, setOldValue] = useState<iOldValue>();
  const [newValue, setNewValue] = useState([]);
  useEffect(() => {
    api
      .get(`/places/${id}`)
      .then((res) => setOldValue(res.data.avaliation))
      .catch((err) => console.log(err));
  }, []);
  console.log(oldValue);
  function newAvaliation() {
    // setNewValue([...oldValue, value]);

    const data = {
      avaliation: value,
      userId: userId,
    };
    api
      .patch(`/places/${id}`, data)
      .then((res) => console.log("deu certo"))
      .catch((err) => err + "deu errado");
  }
  return (
    <>
      <button onClick={newAvaliation}>Enviar</button>
    </>
  );
};

export default SendAvaliation;
