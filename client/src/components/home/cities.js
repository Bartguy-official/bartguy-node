import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

function Cities(props) {
  return (
    <>
      <Form.Group controlId="productForm.city">
        <Form.Label>City *</Form.Label>
        <Form.Control as="select">
          <option>Choose City</option>
          {props.cities.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </>
  );
}

const mapStoreToProps = (store) => {
  return {
    cities: store.uploadProduct.cities,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cities);
