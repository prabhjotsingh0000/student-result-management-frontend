// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { BASE_URL } from "../../constants";

// CreateStudent Component
const CreateStudent = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });
  // onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .post(`${BASE_URL}/api/student/addstudent`, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully created");
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

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
};

// Export CreateStudent Component
export default CreateStudent;
