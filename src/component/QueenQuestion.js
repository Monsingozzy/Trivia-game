import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export const QueenQuestion = () => {
  const [posts, setPosts] = useState({});
  const [ans, setans] = useState("");
  const [result, setresult] = useState("Your Result Appear here");

  useEffect(() => {
    axios.get("https://jservice.io/api/random").then((response) => {
      setPosts(response.data[0]);
    });
  }, []);
  // console.log(posts.id, posts.answer, posts.question);
  const checkingAns = (e) => {
    setans(e.target.value);
  };

  const validating = () => {
    let simple = posts.answer.replace(/[^A-Z0-9]+/gi, " ");
    // console.log(simple);
    // console.log(ans.length);

    if (ans.length === 0) {
      setresult((e) => (e = "Please Enter Answer"));
    } else if (simple === ans) {
      setresult((e) => (e = "Right Answer"));
    } else {
      setresult((e) => (e = "Wrong Answer"));
    }
  };
  const nextQ = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <h3> Question </h3>
      <h1>{posts.question}</h1>
      <h3>Enter your Answer</h3>
      <input type="text" required onChange={checkingAns} value={ans}></input>
      <div>
        <button className="button_ans" onClick={validating}>
          Submit Answer
        </button>
        <button className="button_ans" onClick={nextQ}>
          Next Question
        </button>
      </div>
      <div>
        <h1 className="result">{result}</h1>
      </div>
    </div>
  );
};
