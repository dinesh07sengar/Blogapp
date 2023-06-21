import { GETDATA_SUCCESSFULLY, GETDATA_FAIL, POSTDATA_SUCCESSFULL, USER_DATA, POSTDATA_FAIL, PATCHDATA_Fail, Delete_SUCCESSFULLY, PATCHDATA_SUCCESSFULLY, LOGIN_SUCCESS } from "./Actiontype"
import axios from 'axios'

const datasuccess = (payload) => {
    return ({
        type: GETDATA_SUCCESSFULLY,
        payload
    })

}
const posted = () => {
    return ({
        type: POSTDATA_SUCCESSFULL,
        payload
    })
}
const Patchd = () => {
    return ({
        type: PATCHDATA_SUCCESSFULLY
    })
}
const deleted = () => {
    return ({
        type: Delete_SUCCESSFULLY

    })
}
const mydata = () => {
    return ({
        type: USER_DATA,
        payload
    })
}
const login = () => {
    return ({
        type: LOGIN_SUCCESS

    })
}

export const Customthunk = (method, val, id) => {
    return (dispatch) => {
        const Getdata = (dispatch) => {
            axios.get("https://blogs-9eip.onrender.com")
                .then((d) => {
                    console.log(d.data)
                    dispatch(datasuccess(d.data))

                })
                .catch((err) => {
                    console.log(err)

                })
        }
        const Mydata = (dispatch) => {
            let token = localStorage.getItem("vtoken");
            axios.get("https://blogs-9eip.onrender.com/posts", {
                headers: {
                    "auth": token
                }
            })
                .then((d) => {
                    console.log(d)
                    dispatch(mydata(d.data))

                })
                .catch((err) => {
                    console.log(err)

                })
        }
        const Resgister = (dispatch, data) => {
            axios.post("https://blogs-9eip.onrender.com/register", data)

                .then((d) => {
                    console.log(d)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const loginfn = (dispatch,data) => {
            axios.post("http://localhost:4900/login", data)
                .then((d) => {
                    console.log(d)
                    localStorage.setItem("vtoken", d.data.token)
                    dispatch(login())
                })
                .catch((err) => {
                    console.log(err)
                })

        }
        const Postdata = (dispatch, data) => {
            let token = localStorage.getItem("vtoken");
            axios.post("https://blogs-9eip.onrender.com/posts", data, {
                headers: {
                    "auth": token
                }
            })
                .then((d) => {
                    console.log(d)
                    dispatch(posted())
                })
                .catch((err) => {
                    console.log(err)

                })
        }
        const updatedata = (dispatch, id, data) => {
            let token = localStorage.getItem("vtoken");
            axios.patch(`https://blogs-9eip.onrender.com/posts/${id}`, data, {
                headers: {
                    "auth": token
                }
            })
                .then((d) => {
                    console.log(d)
                    dispatch(Patchd())

                })
                .catch((err) => {
                    console.log(err)

                })
        }
        const Deletedata = (dispatch, id) => {
            let token = localStorage.getItem("vtoken");
            axios.delete(`https://blogs-9eip.onrender.com/posts/${id}`, {
                headers: {
                    "auth": token
                }
            })
                .then((d) => {
                    console.log(d)
                    dispatch(deleted())

                })
                .catch((err) => {
                    console.log(err)

                })
        }
        if (method === "user") {
            Mydata(dispatch)
        }
        else if (method === "post") {
            Postdata(dispatch, val)
        }
        else if (method === "update") {
            updatedata(dispatch, id, val)
        }
        else if (method === "delete") {
            Deletedata(dispatch, id)
        }
        else if(method==="mypost"){
            mydata(dispatch)
        }
        else if(method==="login"){
            loginfn(dispatch,val)
        }
        else if(method==="register"){
            Resgister(dispatch,val)
        }
        else {
            Getdata(dispatch)
        }

    }

}