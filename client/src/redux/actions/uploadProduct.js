import * as types from "../actions/types";
import produce from "immer";
import apolloClient from "../../apolloClient";
import { gql } from "@apollo/client";
import React from "react";

export const populateStates = (selectedCountry) => {
  return (dispatch) => {
    const fetchStates = gql`
        {
          getStates(countryId:${selectedCountry}) {
            data {
              id
              name
            }
          }
        }
      `;

    apolloClient
      .query({
        query: fetchStates,
      })
      .then((result) => {
        if (result.data) {
          let statesData = result.data.getStates.data;
          dispatch({
            type: types.COUNTRY_CHANGED,
            selectedCountry: selectedCountry,
            states: statesData,
          });
        }
      });
  };
};

export const populateCities = (selectedState) => {
  return (dispatch) => {
    const cityQuery = gql`
        {
          getCities(stateId:${selectedState}) {
            data {
              id
              name
            }
          }
        }
      `;

    apolloClient
      .query({
        query: cityQuery,
      })
      .then((result) => {
        if (result.data) {
          let citiesData = result.data.getCities.data;
          dispatch({
            type: types.STATE_CHANGED,
            selectedState: selectedState,
            cities: citiesData,
          });
        }
      });
  };
};
