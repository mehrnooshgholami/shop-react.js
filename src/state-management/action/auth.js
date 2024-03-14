export const  register = (firstName,lastName,email,mobileNo,city,zipCode,adress,password) =>(dispatch) => {
    return AuthService.register(firstName,lastName,email,mobileNo,city,zipCode,adress,password)
}