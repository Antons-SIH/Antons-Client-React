import { LOGIN, LOGOUT,OTPVERIFIED, PHONEVERIFIED,FACEVERIFIED} from "./actions";

const initialState = {
  token: localStorage.getItem("userinfo"),
  isAuthenticated: false,
  userData: {},
  phoneVerfied:false,
  faceVerfied:""
 
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        userData: payload.data.data,
        token:payload.data.data.token
      };
    }
    case LOGOUT: {
      localStorage.removeItem("userinfo");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userData: null,
      };
    }
    case OTPVERIFIED:{
      return{
        ...state,
        isAuthenticated:true,
      }
    }
    case PHONEVERIFIED:{
      return{
        ...state,
        phoneVerfied:true
      }
    }
    case FACEVERIFIED:{
      return{
        ...state,
        faceVerfied:payload.address
      }
    }
    default:
      return state;
  }
}
