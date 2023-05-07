import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ResultTableRow from "./ResultTableRow";
import { BASE_URL } from "../../constants";

const ResultList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/result/getallresults/`)
      .then(({ data }) => {
        setResults(data);
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
    return results.map((res, i) => {
      return <ResultTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default ResultList;
