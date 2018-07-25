import React from 'react'

const Teacher = (props) => {
  return (
    <li className="Teacher">
      {props.name}
      <a href={`https://twitter.com/${props.twitter}`} target="_blank">
        {props.twitter}
      </a>
    </li>
  )
}

export default Teacher
