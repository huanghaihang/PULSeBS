const knex = require("./../db");

// Get the list of lectures scheduled for a course
exports.getScheduledLectures = async (req, res) => {
  const courseId = req.params.courseid;
  knex
    .select({id: "l.id"}, {name: "l.name"}, {course: "l.course"}, {start: "l.start"}, {end: "l.end"}, 
      {capacity: "l.capacity"}, {lecturer_id: "u.id"}, {lecturer_name: "u.name"}, {lecturer_surname: "u.surname"})
    .from({l: "lecture"})
    .join({u: "user"}, "l.lecturer", "=", "u.id")
    .where("l.course", courseId)
    .then((queryResults) => {
      res.json(queryResults);
    })
    .catch((err) => {
      res.json({
        message: `There was an error retrieving the scheduled lectures: ${err}`,
      });
    });
};

// Get the list of students booked for a lecture
exports.getBookedStudents = async (req, res) => {
    const lectureId = req.params.lectureid;
    knex
      .select({id: "user.id"}, {name: "user.name"}, {surname: "user.surname"}, {email: "user.email"})
      .from("lecture_booking")
      .join("user", "lecture_booking.student_id", "=", "user.id")
      .where("lecture_booking.lecture_id", lectureId)
      .then((queryResults) => {
        res.json(queryResults);
      })
      .catch((err) => {
        res.json({
          message: `There was an error retrieving the students list: ${err}`,
        });
      });
  };
