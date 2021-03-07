import React, { Fragment } from "react"
import {
  Container,
  CourseTrainerContainer,
  Trainer,
  Course,
} from "../../../styled/Experience/ExperienceTab"
import { courses } from "../../../redux/const"

export default function Tab({ setHeight, ...rest }) {
  return (
    <Container id="course_tab" {...rest}>
      {Object.keys(courses).map((school, i) => (
        <CourseTrainerContainer key={i+12}>
          <Trainer>{school}</Trainer>
          {courses[school].map((course, j) => (
            <Fragment key={j+123}>
              <Course color="var(--teal)" href={course.url}>
                {course.course}
              </Course>
              <br />
            </Fragment>
          ))}
        </CourseTrainerContainer>
      ))}
    </Container>
  )
}
