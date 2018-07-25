import React from "react";
import Teacher from './teacher.jsx'

class TeacherList extends React.Component {
  render() {
    return (
      <ul className="TeacherList">
        {
          this.props.teachers.map((teacher) => {
            return <Teacher key={teacher.twitter} {...teacher}/>
          })
        }
      </ul>
    )
  }
}

export default TeacherList
