export const RegisterReducer=(state={userInfo:{}},action)=>{
    switch (action.type) {
        
    case"USER_REGISTER_REQUEST":return{
        loading:true
    }
    case "USER_REGISTER_SUCCESS":return{
        loading:false,
        success:true

    }
       case "USER_REGISTER_FALL": return{
loading:false, error:action.payload
       }
       default :return state

    }
    }
   
    export const LoginReducer=(state={userInfo:{},error:"",loading:false},action)=>{

        switch (action.type) {
            case "USER_LOGIN_REQUEST":
                return{...state,
                loading:true
            }
            case "USER_LOGIN_SUCCESS":
                return{
                    ...state,
            loading:false,
            userInfo:action.payload
            }
            case "USER_LOGIN_Fail":
                return{
                    
                    ...state, loading:false,error:action.payload
                }
            
            default:return state
        }


    }