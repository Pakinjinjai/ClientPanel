///Production///
const baseURL = "https://health-backend-kp6f.onrender.com/api" 

///Development///
// const baseURL = "http://localhost:8080/api" 
const LOGIN_API = "/user-login";
const REGISTER_API = "/user-register";

/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const UPLOADIMAGE_API = "/upload-images-me";

/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const GETIMAGE_API = "/get-me-dataHealth"; 

/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const GETALLIMAGE_MEAPI = '/get-all-images-me'

/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const UPDATEUSER = '/user-update'

/** 'Authorization': `Bearer Include accessToken in the header'Content-Type': 'application/json' **/ 
const GETUSERACCOUNT_API = '/get-username-account-me'


export {
    baseURL,
    LOGIN_API,
    REGISTER_API,
    UPLOADIMAGE_API,
    GETALLIMAGE_MEAPI,
    UPDATEUSER,
    GETIMAGE_API,
    GETUSERACCOUNT_API
}