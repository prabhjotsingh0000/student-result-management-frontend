// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "./StudentForm";
import { BASE_URL } from "../../constants";

// EditStudent Component
const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(`${BASE_URL}/api/student/updatestudent/` + id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          navigate("/student-list");
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

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/student/getstudent/` + id)
      .then((res) => {
        const { firstName, lastName, email, dob } = res.data;
        setFormValues({ firstName, lastName, email, dob });
      })
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  }, []);

  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};

// Export EditStudent Component
export default EditStudent;
