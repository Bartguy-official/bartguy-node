import React from "react";
import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as types from "../../redux/actions/types";
import { Form } from "react-bootstrap";
import apolloClient from "../../apolloClient";
import { populateStates } from "../../redux/actions/uploadProduct";

function Countries(props) {
  const allCountries = gql`
    {
      getCountries {
        data {
          id
          name
        }
      }
    }
  `;

  let countriesData;

  apolloClient
    .query({
      query: allCountries,
    })
    .then((result) => {
      if (result.data) {
        props.populateCountries(result.data.getCountries.data);
        countriesData = (
          <>
            {result.data.getCountries.data.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </>
        );
      }
    });

  return (
    <>
      <Form.Group controlId="productForm.country">
        <Form.Label>Country *</Form.Label>
        <Form.Control as="select" onChange={props.changeCountry}>
          <option>Choose Country</option>
          {props.countries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
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
    populateCountries: (countries) => {
      return dispatch({
        type: types.FETCH_COUNTRIES,
        countries: countries,
        isFetching: true,
      });
    },
    changeCountry: (e) => {
      return dispatch(populateStates(e.target.value));
    },
  };
};

const mapStoreToProps = (store) => {
  return {
    countries: store.uploadProduct.countries,
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Countries);
