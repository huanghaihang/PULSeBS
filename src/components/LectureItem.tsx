import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const lectureItem = (props) => {
  let { lecture, loadCourseData } = props;

  return (
    <div className="mx-3 my-3 ">
      <Card bg={"Light"} text={"dark"} style={{ width: "20rem" }}>
        <Card.Header>{lecture.name}</Card.Header>
        <Card.Body>
          <Card.Title> Course ID: {lecture.id} </Card.Title>
          <Card.Text>
            Capacity is <b>{lecture.capacity}</b>.
          </Card.Text>
          <Button variant="primary" onClick={loadCourseData}>
            Select the Course
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default lectureItem;
