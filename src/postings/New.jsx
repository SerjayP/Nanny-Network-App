import React, { useState } from "react";
import { Row, Col, Button} from 'react-bootstrap';


function CreatePosting() {

    const [input, setInput] = useState({
        parentName: '',
        contactNumber: '',
        contactEmail: '',
        numberOfChildren: '',
        ageOfChildren: '',
        date: '',
        location: 'New York City'
    })

    function handleChange(event){
        const {name, value} = event.target;
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
      // event.preventDefault();
      
    }

  return (
    <main className="pt-3 pb-5">
      <Row>
        <h1>Find A Sitter</h1>
        <Col sm="6">
      <img width="100%" src="https://post.healthline.com/wp-content/uploads/2020/11/834360-Best-Babysitting-websites-and-Apps-732x549-Feature.jpg" />
        </Col>
        <Col>
      <form action="/posting" method="POST" >
        <h5>Name:</h5>
        <input
          onChange={handleChange}
          name="parentName"
          value={input.parentName}
          autoComplete="off"
          placeholder="Your Name"
          required
        />
        <h5>Phone Number:</h5>
         <input
          onChange={handleChange}
          name="contactNumber"
          value={input.contactNumber}
          type={'tel'}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          autoComplete="on"
          placeholder="Phone Number"
          required
        />
        <small style={{ color: '#ff0000'}}>  (Format: XXX-XXX-XXXX)*</small>
        <h5>Email:</h5>
         <input
          onChange={handleChange}
          name="contactEmail"
          type="email"
          value={input.contactEmail}
          autoComplete="on"
          placeholder="Email address"
          required
        />
        <h5>Number of Children:</h5>
        <input
          onChange={handleChange}
          name="numberOfChildren"
          type="number"
          min="1"
          value={input.numberOfChildren}
          autoComplete="off"
          placeholder="Number of Children"
          required
        />
        <h5>Age of Children:</h5>
        <input
          onChange={handleChange}
          name="ageOfChildren"
          value={input.ageOfChildren}
          autoComplete="off"
          placeholder="Age of Children"
          required
        />
        <h5>Date & Time:</h5>
        <input
          onChange={handleChange}
          name="date"
          type={"datetime-local"}
          value={input.date}
          autoComplete="off"
          placeholder="Date needed"
          required
        />
        <h5>Location:</h5>
        <select name="location"  value={input.location} onChange={handleChange}>
        <option value="DEFAULT" disabled>Choose a city</option>
          <option value="New York City">New York City</option>
          <option value="Hampton, VA">Hampton, VA</option>
          <option value="Coleman, Ohio">Coleman, Ohio</option>
        </select> <br /><br />
        <button className="glow-on-hover" >Create Posting</button>
      </form>
      <br/>
      <h5>If you have any questions please contact us!</h5>
      </Col>
      </Row>
    </main>
  );
}
export default CreatePosting;