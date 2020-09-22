import * as types from "../actions/types";
import produce from "immer";
import apolloClient from "../../apolloClient";
import { gql } from "@apollo/client";
import React from "react";

export const populatePageData = (pageName) => {
  return (dispatch) => {
    const fetchPage = gql`
        {
          getPageData(pageName:"${pageName}") {
            data {
              title
              description
            }
          }
        }
      `;

    apolloClient
      .query({
        query: fetchPage,
      })
      .then((result) => {
        if (result.data) {
          let pagesData = result.data.getPageData.data;
          console.log(pagesData);
          dispatch({
            type: types.GET_PAGE_DATA,
            pageData: pagesData,
            pageName: pageName,
          });
        }
      });
  };
};
