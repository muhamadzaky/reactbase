/**
* @author muhamad.zaky
* This file contain functions to call API
* If you have data that many pages will use the data, I recommend you to use Reducer
* If not, you can call the API directly from the component
*/

import { api } from "../../../common/services/api";
import { FINISH_GET_DATA, REMOVE_DATA, START_GET_DATA } from "./home-action-type";

export const GetData = () => dispatch => {
  dispatch(startGetData());
  api.get('/test')
  .then(res => {
    dispatch(finishGetData(res.data))
  })
  .catch(() => {
    dispatch(finishGetData({}))
  })
}

const startGetData = () => {
  return {
    type: START_GET_DATA
  }
}

const finishGetData = payload => {
  return {
    type: FINISH_GET_DATA,
    payload
  }
}

export const RemoveData = () => dispatch => {
  dispatch(removeData());
}

const removeData = () => {
  return {
    type: REMOVE_DATA
  }
}