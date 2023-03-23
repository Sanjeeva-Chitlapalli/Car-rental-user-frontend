import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">

        <FormGroup className="form__group">
          <p>From</p>
          <input type="date" placeholder="Journey date" required />
        </FormGroup>
        <FormGroup className="form__group">
          <p>To</p>
          <input type="date" placeholder="Journey date" required />
        </FormGroup>
        <FormGroup className="select__group">
          <p>Type of Car</p>
          <select>

            <option value="SUV">SUV</option>
            <option value="ac">AC Car</option>  
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
