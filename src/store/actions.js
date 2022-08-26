export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const OTPVERIFIED ="OTPVERIFIED";
export const PHONEVERIFIED ="PHONEVERIFIED";
export const FACEVERIFIED ="FACEVERIFIED"



export const login = (userData) => {
	
	return {
	
		type: LOGIN,
		payload: userData
	};
	
}
export const otpverified =(userData) =>{
	
	return {
		type:OTPVERIFIED
	}
}
export const phoneverified =()=>{
	return{
		type:PHONEVERIFIED
	}
}
export const faceverified =(userdata)=>{
	return{
		type:FACEVERIFIED,
		payload:userdata
	}
}

// Logout / Clear Profile

export const logout = () => {
	return { type: LOGOUT };
};
