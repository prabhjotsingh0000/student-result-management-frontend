import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";

const StudentTableRow = (props) => {
  const { _id, firstName, lastName, email, dob } = props.obj;

  const date = new Date(dob);

  const deleteStudent = () => {
    axios
      .delete(`${BASE_URL}/api/student/deletestudent/` + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
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
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        {date.getUTCMonth() +
          1 +
          "/" +
          date.getUTCDate() +
          "/" +
          date.getUTCFullYear()}
      </td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
