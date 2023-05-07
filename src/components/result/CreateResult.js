// CreateResult Component for add new result

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultForm from "./ResultForm";
import { BASE_URL } from "../../constants";

// CreateResult Component
const CreateResult = () => {
  const [formValues, setFormValues] = useState({
    studentName: "",
    courseName: "",
    email: "",
    score: "",
  });
  // onSubmit handler
  const onSubmit = (resultObject) => {
    axios
      .post(`${BASE_URL}/api/result/addresult`, resultObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Result successfully created");
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

  // Return result form
  return (
    <ResultForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Result
    </ResultForm>
  );
};

// Export CreateResult Component
export default CreateResult;
