export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const OTPVERIFIED ="OTPVERIFIED";

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

// Logout / Clear Profile

export const logout = () => {
	return { type: LOGOUT };
};
