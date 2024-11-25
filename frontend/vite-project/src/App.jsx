import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [ones, setOnes] = useState([]);
  const [id, setId] = useState("");
  const [addNew, setAddNew] = useState({ title: "", author: "" });
  const [edit, setEdit] = useState({ title: "", author: "" });
  const [editId, setEditId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/book/all")
      .then((res) => {
        setData(res.data);
        console.log("Got the data:", res.data);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  const addi = () => {
    axios
      .get(`http://localhost:7000/api/book/${id}`)
      .then((res) => {
        setOnes(res.data);
        console.log("Got the Singular data:", res.data);
      })
      .catch((err) => {
        console.log("Error fetching single book:", err);
      });
  };

  const handleInput = (event) => {
    setAddNew({ ...addNew, [event.target.name]: event.target.value });
  };

  const updateOnChange = (event) => {
    setEdit({ ...edit, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:7000/api/book/add`, addNew)
      .then((res) => {
        console.log("Book added:", res.data);
        axios.get("http://localhost:7000/api/book/all").then((res) => {
          setData(res.data);
          console.log("Updated data fetched:", res.data);
        });
      })
      .catch((err) => {
        console.log("Error adding book:", err);
      });
  };

  const changeValue = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:7000/api/book/${editId}`, edit)
      .then((res) => {
        console.log("Updated book:", res.data);
        axios.get("http://localhost:7000/api/book/all").then((res) => {
          setData(res.data);
          console.log("Updated data fetched:", res.data);
        });
      })
      .catch((err) => {
        console.log("Invalid ID to update:", err);
      });
  };

  return (
    <>
      <div>
        <h1>Getting all the books</h1>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <b>Title</b>: {item.title}
            </div>
            <div>
              <b>ID</b>: {item._id}
            </div>
            <div>
              <b>Author</b>: {item.author}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1>Getting a Single Book</h1>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={addi}>Retrieve</button>
        {ones && (
          <div>
            <div>
              <b>ID</b>: {ones._id}
            </div>
            <div>
              <b>Title</b>: {ones.title}
            </div>
            <div>
              <b>Author</b>: {ones.author}
            </div>
          </div>
        )}
      </div>

      <div>
        <h1>Adding New Books</h1>
        <input type="text" placeholder="Book Name" name="title" onChange={handleInput} />
        <input type="text" placeholder="Author Name" name="author" onChange={handleInput} />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div>
        <h1>Updating the Books</h1>
        <input type="text" placeholder="Book ID" onChange={(e) => setEditId(e.target.value)} />
        <input type="text" name="title" value={edit.title} onChange={updateOnChange} />
        <input type="text" name="author" value={edit.author} onChange={updateOnChange} />
        <button onClick={changeValue}>Edit</button>
      </div>
    </>
  );
}

export default App;
