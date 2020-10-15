import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import PlansContext from "./AppContext";
import { GET_CLIENT_DATA } from "../actionsTypes";
import * as api from "api";

const AppState = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // get plans
  const getClientData = () => {
    api.getClient(process.env.REACT_APP_CLIENT_CODE).then((data) =>
      dispatch({
        type: GET_CLIENT_DATA,
        payload: data,
      })
    );
  };

  return (
    <PlansContext.Provider
      value={{
        clientData: state,
        getClientData,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default AppState;
