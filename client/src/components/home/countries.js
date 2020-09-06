import React from "react";
import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { useEffect, useState } from "react";

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
  
  const { loading, data, error } = useQuery(allCountries);

  if (loading) {
    countriesData = <option>Choose Country</option>;
  } else if (error) {
    countriesData = <option>Choose Country</option>;
  } else {
    countriesData = (
      <div>
        {data.getCountries.data.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </div>
    );
  }
  return (
    <select
      name="country_id"
      id="product_country"
      className="selectpicker sel_state"
    >
      <option>Choose Country</option>
      {countriesData}
    </select>
  );
}

export default Countries;
