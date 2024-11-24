import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/book/all")
      .then((res) => {
        setData(res.data);
        console.log("Got the data")
        console.log(res.data);
      })
      .catch((err) => {
        console.log("The error is:", err);
      });
  }, []);

  return (
    <>
      <h1>This is the data</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div><b>Title</b></div>
            <div>{item.title}</div>
            <div><b>id</b></div>
            <div>{item._id}</div>
            <div><b>Author</b></div>
            <div>{item.author}</div>
            <br/>
            <br/>
          </div>
        );
      })}
    </>
  );
}

export default App;
