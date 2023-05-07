import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./components/student/CreateStudent";
import EditStudent from "./components/student/EditStudent";
import StudentList from "./components/student/StudentList";
import CreateCourse from "./components/course/CreateCourse";
import EditCourse from "./components/course/EditCourse";
import CourseList from "./components/course/CourseList";
import CreateResult from "./components/result/CreateResult";
import EditResult from "./components/result/EditResult";
import ResultList from "./components/result/ResultList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  Student Result Management System
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-course"} className="nav-link">
                    Create Course
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/course-list"} className="nav-link">
                    Course List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-result"} className="nav-link">
                    Create Result
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/result-list"} className="nav-link">
                    Result List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreateStudent />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                  <Route path="/create-course" element={<CreateCourse />} />
                  <Route path="/edit-course/:id" element={<EditCourse />} />
                  <Route path="/course-list" element={<CourseList />} />
                  <Route path="/create-result" element={<CreateResult />} />
                  <Route path="/edit-result/:id" element={<EditResult />} />
                  <Route path="/result-list" element={<ResultList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
