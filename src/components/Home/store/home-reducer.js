/**
* @author muhamad.zaky
* This file contain functions to push data from Action to constant
* You can call the initialState constant to access the data from Reducer to display on Component (this.props.initialStateObj)
*/

import { FINISH_GET_DATA, REMOVE_DATA, START_GET_DATA } from "./home-action-type";

const inisialState = {
  data: "",
  meta: {},
  loading: false
}

const handler = currentState => {
  const startGetData = () => {
    return {
      ...currentState,
      loading: true
    }
  }
  
  const finishGetData = datas => {
    return {
      ...currentState,
      loading: false,
      data: datas && datas.data.message,
      meta: datas && datas.meta
    }
  }
  
  const removeData = () => {
    return {
      ...currentState,
      data: "",
      meta: {}
    }
  }

  return {
    startGetData,
    finishGetData,
    removeData
  }
}

const reducerSwitch = (state = inisialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case START_GET_DATA:
      return handler(state).startGetData();
    case FINISH_GET_DATA:
      return handler(state).finishGetData(payload);
    case REMOVE_DATA:
      return handler(state).removeData();
    default:
      return state;
  }
}

export default reducerSwitch;