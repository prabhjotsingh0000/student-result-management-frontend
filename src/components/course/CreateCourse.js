// CreateCourse Component for add new course

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import { BASE_URL } from "../../constants";

// CreateCourse Component
const CreateCourse = () => {
  const [formValues, setFormValues] = useState({
    courseName: "",
  });
  // onSubmit handler
  const onSubmit = (courseObject) => {
    axios
      .post(`${BASE_URL}/api/course/addcourse`, courseObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Course successfully created");
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

  // Return course form
  return (
    <CourseForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Course
    </CourseForm>
  );
};

// Export CreateCourse Component
export default CreateCourse;
