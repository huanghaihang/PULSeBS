//import React from 'react';
import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import LectureItem from "./LectureItem";
import CourseItem from "./CourseItem";
import StudentItem from "./StudentItem";
import axios from "axios";
import WeeklyCalendar from "./WeeklyCalendar";

class studentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lectures: [],
      students: [],
      courses: [],
      selectedLecture: 0,
      selectedCourse: 0,
    };
  }

  getStudentList = (lectureID) => {
    axios
      .get(`/lectures/:${lectureID}/students`, {})
      .then((response) => {
        let result = response.data.reduce((acc, er) => er.name, 0);
        this.setState({ lectures: result });
      });
  };

  getCourseList = () => {
    axios.get(`/courses`, {}).then((response) => {
      let result = response.data.reduce((acc, er) => er.name, 0);
      this.setState({ courses: result });
    });
  };

  getLecturesList = (lectureID) => {
    axios
      .get(`/lectures/`, {
        lectureid: lectureID,
      })
      .then((response) => {
        let result = response.data.reduce((acc, er) => er.name, 0);
        this.setState({ courses: result });
      });
  };

  formatEvents() {
    return this.state.lectures.map((lecture) => {
      const { name, end, start } = lecture;

      let startTime = new Date(start);
      let endTime = new Date(end);

      return {
        title: name,
        start: startTime,
        end: endTime,
        extendedProps: { ...lecture },
      };
    });
  }
  handleEventClick = ({ event }) => {
    console.log("studentlistview");
    this.scrolltoview("studentlistview");
  };

  handleEventDrop = (info) => {
    if (window.confirm("Are you sure you want to change the event date?")) {
      console.log("change confirmed");

      // updateAppointment is another custom method
      this.props.updateAppointment({
        ...info.event.extendedProps,
        start: info.event.start,
        end: info.event.end,
      });
    } else {
      console.log("change aborted");
    }
  };

  scrolltoview = (elementId) => {
    var input =
      typeof elementId == "string" ? elementId : "WeeklyCalendarContainer";

    console.log(input);
    document.getElementById(input).scrollIntoView({
      behavior: "smooth",
    });
  };

  componentDidMount() {
    this.setState({ selectedLecture: 1 });
    this.getLecturesList(1);

    this.setState({
      lectures: [
        {
          id: 2323,
          name: "Software 2",
          start: Date.parse("11/9/2020 13:00:00 GMT"),
          end: Date.parse("11/9/2020 14:00:00 GMT"),
          capacity: 84,
          booked_students: "20",
          course: "84",
          lecturer: "sdetad",
        },

        {
          id: 2423,
          name: "Data Science and Database Technology",
          start: Date.parse("13/9/2020 12:00:00 GMT"),
          end: Date.parse("13/9/2020 14:00:00 GMT"),
          capacity: 170,
          booked_students: "20",
          course: "170",
          lecturer: "sdetad",
        },

        {
          id: 2623,
          name: "Compiler",
          start: Date.parse("14/9/2020 09:00:00 GMT"),
          end: Date.parse("14/9/2020 11:00:00 GMT"),
          capacity: 60,
          booked_students: "20",
          course: "60",
          lecturer: "sdetad",
        },

        {
          id: 2253,
          name: "Computer Architectures",
          start: Date.parse("15/9/2020 12:00:00 GMT"),
          end: Date.parse("15/9/2020 13:00:00 GMT"),
          capacity: 210,
          booked_students: "20",
          course: "210",
          lecturer: "sdetad",
        },

        {
          id: 2293,
          name: "System and Device Programming",
          start: Date.parse("16/9/2020 13:00:00 GMT"),
          end: Date.parse("16/9/2020 14:00:00 GMT"),
          capacity: 130,
          booked_students: "20",
          course: "130",
          lecturer: "sdetad",
        },

        {
          id: 2393,
          name: "Computer Networks",
          start: Date.parse("17/9/2020 13:00:00 GMT"),
          end: Date.parse("17/9/2020 14:00:00 GMT"),
          capacity: 129,
          booked_students: "20",
          course: "129",
          lecturer: "sdetad",
        },

        {
          id: 2723,
          name: "Mobile application development",
          start: Date.parse("18/9/2020 13:00:00 GMT"),
          end: Date.parse("18/9/2020 14:00:00 GMT"),
          capacity: 83,
          booked_students: "20",
          course: "32",
          lecturer: "sdetad",
        },
      ],
    });
    this.setState({
      students: [
        { id: 2223, name: "Mithridates", surename: "Theophylaktos" },
        { id: 2213, name: "Ajay", surename: "Phoibe" },
        { id: 4253, name: "Valeri", surename: "Sabina" },
        { id: 2263, name: "Mithridates", surename: "Theophylaktos" },
        { id: 2273, name: "Ajay", surename: "Phoibe" },
        { id: 4283, name: "Valeri", surename: "Sabina" },
        { id: 2593, name: "Loane", surename: "Aeson" },
      ],
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Courses</h3>
              {this.state.lectures && (
                <div style={{ height: "46vh", overflow: "scroll" }}>
                  <div
                    className="d-flex align-content-center  flex-wrap bg-light "
                    style={{ width: "71vw" }}
                  >
                    {this.state.lectures.map((lecture) => (
                      <CourseItem
                        key={lecture.id}
                        course={lecture}
                        loadCourseData={this.scrolltoview}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-100" style={{ height: "5vh" }}></div>
            <div id="WeeklyCalendarContainer" className="col">
              <WeeklyCalendar
                handleEventClick={this.handleEventClick}
                Items={this.state.lectures}
              />
            </div>

            <div className="w-100" style={{ height: "5vh" }}></div>

            <div id="studentlistview" className="col">
              <h3>Students</h3>
              {this.state.students && (
                <ListGroup as="ul" variant="flush" style={{ height: "28rem" }}>
                  {this.state.students.map((student) => (
                    <StudentItem key={student.id} student={student} />
                  ))}
                </ListGroup>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default studentList;
