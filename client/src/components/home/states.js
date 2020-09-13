import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as types from "../../redux/actions/types";
import { populateCities } from "../../redux/actions/uploadProduct";

function States(props) {
  return (
    <>
      <Form.Group controlId="productForm.state">
        <Form.Label>State *</Form.Label>
        <Form.Control as="select" onChange={props.changeState}>
          <option>Choose State</option>
          {props.states.map((state) => {
            return (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (e) => {
      dispatch(populateCities(e.target.value));
    },
  };
};

const mapStoreToProps = (store) => {
  return {
    states: store.uploadProduct.states,
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(States);
