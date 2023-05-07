import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";

const ResultTableRow = (props) => {
  const { _id, studentName, courseName, email, score } = props.obj;

  const deleteResult = () => {
    axios
      .delete(`${BASE_URL}/api/result/deleteresult/` + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Result successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <tr>
      <td>{studentName}</td>
      <td>{courseName}</td>
      <td>{email}</td>
      <td>{score}</td>
    </tr>
  );
};

export default ResultTableRow;
