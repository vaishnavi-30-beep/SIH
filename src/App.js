import "./App.css";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";

function App() {
  // const [verify, setVerify] = useState(true);
  // function getData() {
  //   console.log("In get data");
  //   axios.get(`http://20.244.36.11:8000/api/expert`).then((res) => {
  //     console.log("Data fetched", res);
  //   });
  //   console.log("Data fetched");
  // }
  // const [show, setShow] = useState(true);
  const [content, setContent] = useState([null]);

  // function getData() {
  //   console.log("In get data");
  //   axios.get("http://20.244.36.11:8000/api/expert").then((res) => {
  //     console.log("Data fetched", res.data);
  //     setContent(res.data);
  //   });
  // }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Table />
    </>
  );
}

export default App;
