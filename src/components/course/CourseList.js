import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import CourseTableRow from "./CourseTableRow";
import { BASE_URL } from "../../constants";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/course/getallcourses/`)
      .then(({ data }) => {
        setCourses(data);
      })
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  }, []);

  const DataTable = () => {
    return courses.map((res, i) => {
      return <CourseTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default CourseList;
