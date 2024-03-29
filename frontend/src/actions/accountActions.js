import Axios from "axios"
import { setAuthHeader } from "../utils/Common"
import { GET_ACCOUNT, UPDATE_ACCOUNT } from "../utils/Constant"
import { setErrors } from './Alert'

export const updateAccount = (accountDetails) => async dispatch => {
    dispatch({
        type: UPDATE_ACCOUNT,
        payload: accountDetails
    })
}

export const getAccountDetails = () => async (dispatch) => {
    try {
        setAuthHeader()
        const accountDetails = await Axios.get('/account')
        dispatch({
            type : GET_ACCOUNT,
            payload: accountDetails.data
        })
    } catch (error) {
        error.response && dispatch(setErrors(error.response.data))
    }
}

export const addAccountDetails = (account_no, bank_name, bvn) => async (dispatch) => {
    try {
        setAuthHeader()
        const account = await Axios.post('/account', {
            account_no,
            bank_name,
            bvn
        })
        
        dispatch({
            type : GET_ACCOUNT,
            payload: account.data
        })
    } catch (error) {
        error.response && dispatch(setErrors(error.response.data))
    }
}

export const updateAccountDetails = (bvn) => async (dispatch) => {
    try {
        setAuthHeader()
        const accountDetails = await Axios.patch('/account', {
            bvn
        })
        dispatch({
            type : GET_ACCOUNT,
            payload: accountDetails.data
        })
    } catch (error) {
        error.response && dispatch(setErrors(error.response.data))
    }
}