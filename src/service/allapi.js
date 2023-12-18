import { commonRequest } from "./CommonRequest";
import { BASE_URL } from "./baseUrl";


// ============================================================================

// Add Video 
// define function for add video
export const addVideo = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/videos`, body)
}

// get video
// define function
export const getVideo = async () => {
    return await commonRequest("GET", `${BASE_URL}/videos`, "")
}

// delete video card
// define a function for delete video 
export const deleteVideo = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/videos/${id}`, {})
}

// ============================================================================

// add category 
// define a function for add category
export const addCategory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/categories`, body)
}

// to get category
export const getAllCategory = async () => {
    return await commonRequest("GET", `${BASE_URL}/categories`, "")
}

// define a function for delete video 
export const deleteCategory = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/categories/${id}`, {})
}

// ============================================================================

// watchhistory section
// ---get history

export const getHistory = async () => {
    return await commonRequest("GET", `${BASE_URL}/Watchhistory`, "")
}

// --add hsitory
export const addHistory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/Watchhistory`, body)
}

// ============================================================================

// get single video details
export const getVideos = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/videos/${id}`, "")
}

// to update drag details in category allvideos[]
export const updateCategory = async (id, body) => {
    return await commonRequest("PUT", `${BASE_URL}/categories/${id}`, body)
}