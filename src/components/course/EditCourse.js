// EditCourse Component for update course data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CourseForm from "./CourseForm";
import { BASE_URL } from "../../constants";

// EditCourse Component
const EditCourse = (props) => {
  const [formValues, setFormValues] = useState({
    courseName: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (courseObject) => {
    axios
      .put(`${BASE_URL}/api/course/updatecourse/` + id, courseObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Course successfully updated");
          navigate("/course-list");
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

  // Load data from server and reinitialize course form
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/course/getcourse/` + id)
      .then((res) => {
        const { courseName } = res.data;
        setFormValues({ courseName });
      })
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  }, []);

  // Return course form
  return (
    <CourseForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Course
    </CourseForm>
  );
};

// Export EditCourse Component
export default EditCourse;
