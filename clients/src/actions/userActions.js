import axios from "axios"

export const RegisterAction=(fname,email,password,cpass)=>async(dispatch)=>{

dispatch({type:"USER_REGISTER_REQUEST"})
try {
    const config={
        headers:{
            "Content-Type":"Application/json"
        }
    }
    const res= await axios.post("/api/users/register",{fname,cpass,password,email},config)
    dispatch({type:"USER_REGISTER_SUCCESS", payload:res.data})
    console.log(res.status)
    if(res.status==200){
        window.location.href="/login"
       
    }
    

   
} catch (error) {
    dispatch({type:"USER_REGISTER_FALL", payload:error.response.data})
    // console.log(error.response)
 
}
}

export const LoginAction=(email,password)=>async(dispatch,getState)=>{
dispatch({type:"USER_LOGIN_REQUEST"})
try {
    const responses=await axios.post("/api/users/login",{password,email},{headers:{ "Content-Type":"Application/json"}})

dispatch({type:"USER_LOGIN_SUCCESS",payload:responses.data});
console.log(responses.data)
localStorage.setItem("userInfo",JSON.stringify(responses.data));
window.location.href="/";
} catch (error) {
    dispatch({type:"USER_LOGIN_Fail",payload:error.response.data})

    // window.alert(error.response.data.message)
}
}

export const LogOutAction= ()=>(dispatch)=>{
    localStorage.removeItem("userInfo");
    Window.location.href="/login"

}


