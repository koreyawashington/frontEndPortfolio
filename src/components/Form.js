import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
          <label>First and Last Name:</label>
          <input type="text"></input>
          <label>Email Address:</label>
          <input type="text"></input>
          <label>Phone Number</label>
          <input type="text"></input>
          <label>Topic</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows="7" placeholder="Type Your Message Here"/>
          <button className="btn">Submit</button>
        </form>

    </div>
  )
}

export default Form