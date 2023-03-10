import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";

/**
 * Fetching posts from API
 * @returns {Array<object>} Returns the 100 newest posts from the API
 */
export async function getPosts() {

    const getPostsURL = `${API_SOCIAL_URL}${action}`;
    
    const response = await fetchWithToken( getPostsURL );

    return await response.json();
};

export async function getPost(id) {
    if (!id) {
        throw new Error("GET requires a postID");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
    
    const response = await fetchWithToken( getPostURL );

    return await response.json();
};


