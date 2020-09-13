import * as types from "../actions/types";
import produce from "immer";
import apolloClient from "../../apolloClient";
import { gql } from "@apollo/client";
import React from "react";

const initialState = {
  countries: [],
  states: [],
  cities: [],
  selectedCountry: 0,
  selectedCity: 0,
  selectedState: 0,
};

export default function (state = initialState, action) {
  let nextState;

  switch (action.type) {
    case types.FETCH_COUNTRIES:
      nextState = produce(state, (draft) => {
        draft.countries = action.countries;
      });
      break;

    case types.COUNTRY_CHANGED:
      nextState = produce(state, (draft) => {
        draft.selectedCountry = action.selectedCountry;
        draft.states = action.states;
      });
      break;

    case types.STATE_CHANGED:
      nextState = produce(state, (draft) => {
        draft.selectedState = action.selectedState;
        draft.cities = action.cities;
      });
      break;

    default:
      return state;
  }
  console.log(nextState);
  return nextState;
}
