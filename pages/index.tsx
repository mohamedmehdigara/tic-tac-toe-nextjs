import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [boardData, setBoardData] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const updateBoardData = (idx) => {
    if (!boardData[idx]) {
      //will check whether specify idx is empty or not
      let value = xTurn === true ? "X" : "O";
      setBoardData({ ...boardData, [idx]: value });
      setXTurn(!xTurn);
    }
  };
  

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="game">
        <div className="game__menu">
        <p>{xTurn === true ? "X Turn" : "O Turn"}</p>        </div>
        <div className="game__board">
          {[...Array(9)].map((v, idx) => {
            return (
              <div

                key={idx}
                className="square">
                 onClick={() => {
                  updateBoardData(idx);
                }}>
{boardData[idx]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}