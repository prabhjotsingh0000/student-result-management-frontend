// EditResult Component for update result data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ResultForm from "./ResultForm";
import { BASE_URL } from "../../constants";

// EditResult Component
const EditResult = (props) => {
  const [formValues, setFormValues] = useState({
    resultName: "",
    courseName: "",
    email: "",
    score: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (resultObject) => {
    axios
      .put(`${BASE_URL}/api/result/updateresult/` + id, resultObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Result successfully updated");
          navigate("/result-list");
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

  // Load data from server and reinitialize result form
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/result/getresult/` + id)
      .then((res) => {
        const { resultName, lastName, email, score } = res.data;
        setFormValues({ resultName, lastName, email, score });
      })
      .catch((err) => {
        if (err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  }, []);

  // Return result form
  return (
    <ResultForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Result
    </ResultForm>
  );
};

// Export EditResult Component
export default EditResult;
