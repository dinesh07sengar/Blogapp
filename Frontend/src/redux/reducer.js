import React from 'react'
import { GETDATA_SUCCESSFULLY, GETDATA_FAIL, POSTDATA_SUCCESSFULL,USER_DATA, POSTDATA_FAIL, PATCHDATA_Fail,Delete_SUCCESSFULLY, PATCHDATA_SUCCESSFULLY, LOGIN_SUCCESS } from "./Actiontype"
import axios from 'axios'


const initial = {
    alldata: [],
    userdata:[],
   success:true,
   isAuth:false,
   failure:true
}

export const Blogreducer = (state = initial, action) => {
    switch (action.type) {

        case GETDATA_SUCCESSFULLY: {
            return {
                ...state, alldata: action.payload
            }
        }
        case LOGIN_SUCCESS: {
            return{
                ...state,isAuth:true
            }
        }
        case USER_DATA: {
            return {
                ...state, userdata: action.payload
            }
        }
        case POSTDATA_SUCCESSFULL:{
            return{
                ...state,success:true,failure:false
            }
        }
        case PATCHDATA_SUCCESSFULLY:{
            return{
                ...state,success:true,failure:false
            }
        }
        case Delete_SUCCESSFULLY:{
            return{
                ...state,success:true,failure:false
            }

        }
       
        default:
            return state;
    }
}