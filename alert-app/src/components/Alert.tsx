import { useState } from "react";

interface AlertProps{
  type:string
}

const alertTypes = [
  "alert-primary",
  "alert-secondary",
  "alert-success",
  "alert-danger",
  "alert-warning",
  "alert-info",
  "alert-light",
  "alert-dark",
]

const [index, setIndex] = useState(0);


const alertClick = (type) => {
  type=alertTypes[]
};



const Alert = ({type="d-none"}:AlertProps) => {
  return (
    <>
      <button className={`alert ${type}`} onClick={alertClick}>Show</button>

    </>
  );
};

export default Alert;
