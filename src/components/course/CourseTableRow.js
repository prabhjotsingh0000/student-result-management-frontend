import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";

const CourseTableRow = (props) => {
  const { _id, courseName } = props.obj;

  const deleteCourse = () => {
    axios
      .delete(`${BASE_URL}/api/course/deletecourse/` + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Course successfully deleted");
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
      <td>{courseName}</td>
      <td>
        <Link className="edit-link" to={"/edit-course/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteCourse} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default CourseTableRow;
