import axios from "axios";

const api = axios.create ({
    // baseURL: "https://delta-painting-backend.herokuapp.com" 
    baseURL: "http://localhost:3001/"
})


//======* Auth *============
// going to http://localhost:3001/auth/signup
export const registerUser = async (registerData) => {
 const resp = await api.post('/auth/signup', registerData)
 localStorage.setItem('authToken', resp.data.token);
 api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
 return resp.data.user; 
}

// goes to http://localhost:3001/auth/login
export const loginUser = async (loginData) => {
    console.log("made it api helper 1")
    const resp = await api.post("/auth/login", loginData);
    console.log("made it api helper 2")
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization= `Bearer ${resp.data.token}`;
    console.log(resp)
    return resp.data.user; 
}

export const verifyUser = async () => {
    const token= localStorage.getItem("authToken");

    if (token) {
        api.defaults.headers.common.authorization =`Bearer ${token}`;
        const resp = await api.get("/auth/verify");
        return resp.data
    }
    return false;
}

// // *
// /auth/signup
// /auth/login
// /auth
// // *


// ========== CITIES =============

// export const allCities = async() => {
//     const resp= await api.get('/city/all');
//     return resp;
// }





//  ========== POST ============
// export const indexPosts = async () => {
//     const resp = await api.get("/post/all");
//     console.log(resp)
//     return resp.data;
// }

// // localhost:3001/post/:cityid
// export const postPost = async (postData) => {
//     const resp = await api.post("/post/1", postData);
//     return resp.data;
// }

// export const putPost = async (postId, postData) => {
//     const resp = await api.put(`/post/${postId}`, postData);
//     return resp.data;
// }

// export const destroyPost = async (id) => {
//     await api.delete(`/post/${id}`);
// }