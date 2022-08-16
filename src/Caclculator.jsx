/* eslint-disable no-eval */
import { useEffect, useState } from "react";
import Button from "./components/Button/index";
import listButton from "./listButton";
const Calculator = () => {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [openHistory, setOpenHistory] = useState(false);
  const handleClick = async (item) => {
    switch (item.action) {
      case "changeTheme":
        document.body.classList.toggle("dark");
        break;
      case "add":
        setContent((pre) => `${pre}${item.content}`);
        break;
      case "=":
        const equals = eval(content);
        if (equals == "Infinity" || isNaN(equals)) {
          alert("Phép tính không hợp lệ");
        } else {
          setResult(equals);
          setHistory((pre) => [...pre, `${content} = ${equals}`]);
        }
        break;
      case "reset":
        setContent("");
        setResult("");
        setHistory([]);
        break;
      case "delete":
        setContent((pre) => pre.slice(0, -1));
        break;
      case "history":
        setOpenHistory((pre) => !pre);
        break;
      default:
        break;
    }
  };
  const renderButton = () => {
    return listButton.map((item, index) => {
      return (
        <div
          className={`calc_listBtn_item ${
            item.action === "=" && "calc_listBtn_item-equals"
          } ${item.action === "delete" && "calc_listBtn_item-delete"}`}
          key={`${item.content}-${index}`}
        >
          <Button
            handleClick={() => {
              handleClick(item);
            }}
          >
            {item.content}
          </Button>
        </div>
      );
    });
  };
  const renderHistory = () => {
    if (history.length === 0) {
      return <p className="calc_history_item ">Chưa có lịch sử</p>;
    } else {
      return history.map((item, index) => {
        return (
          <p key={`${item}-${index}`} className="calc_history_item">
            {item}
          </p>
        );
      });
    }
  };
  useEffect(() => {
    const handlePressKey = (e) => {
      switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "-":
        case "+":
        case "*":
        case "/":
        case "(":
        case ")":
          if (
            e.key === "+" ||
            e.key === "-" ||
            e.key === "*" ||
            e.key === "/"
          ) {
            setContent((pre) => `${pre} ${e.key} `);
            break;
          }
          setContent((pre) => `${pre}${e.key}`);
          break;
        case "Backspace":
          setContent((pre) => {
            return pre.slice(0, -1);
          });
          break;
        default:
          break;
      }
    };
    document.addEventListener("keyup", handlePressKey);
    return () => {
      document.removeEventListener("keyup", handlePressKey);
    };
  }, []);
  useEffect(() => {
    console.log(content);
    const handelPressEnter = (e) => {
      if (e.key === "Enter") {
        const equals = eval(content);
        if (equals == "Infinity" || isNaN(equals)) {
          console.log(equals == "Infinity" || isNaN(equals));
          alert("Phép tính không hợp lệ");
        } else {
          setResult(equals);
          setHistory((pre) => [...pre, `${content} = ${equals}`]);
        }
      }
    };
    document.addEventListener("keyup", handelPressEnter);
    return () => document.removeEventListener("keyup", handelPressEnter);
  }, [content]);
  return (
    <div className="calc">
      <div className="calc_display">
        <div className="calc_display_input">
          {content} <span className="pointer">_</span>
        </div>
        <div className="calc_display_result">{result}</div>
      </div>
      <div className="calc_listBtn">{renderButton()}</div>
      <div className={`calc_history ${openHistory && "calc_history-open"}`}>
        <button onClick={() => setOpenHistory(false)} className="buttonX">
          X
        </button>
        {renderHistory()}
      </div>
    </div>
  );
};
export default Calculator;
