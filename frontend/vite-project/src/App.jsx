import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [ones, setOnes] = useState([]);
  const [id, setId] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/book/all")
      .then((res) => {
        setData(res.data);
        console.log("Got the data");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("The error is:", err);
      });
  }, []);

  const addi = () => {
    axios
      .get(`http://localhost:7000/api/book/${id}`)
      .then((res) => {
        setOnes(res.data);
        console.log("Got the Singular data");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(addi, []);

  return (
    <>
      <div>
        <h1>Getting all the books</h1>
        <h1>This is the data</h1>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <b>Title</b>
              </div>
              <div>{item.title}</div>
              <div>
                <b>id</b>
              </div>
              <div>{item._id}</div>
              <div>
                <b>Author</b>
              </div>
              <div>{item.author}</div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <div>
        <h1>Getting a Single Book</h1>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={addi}>Retrieve</button>{/*Cannot use map function here cause it is a singular object*/}
       
            <div key={ones._id}>
              <div>
                <b>ID</b>
              </div>
              <div>{ones._id}</div>
              <div>
                <b>Title</b>
              </div>
              <div>{ones.title}</div>
              <div>
                <b>author</b>
              </div>
              <div>{ones.author}</div>
            </div>
          
        
      </div>
    </>
  );
}

export default App;
