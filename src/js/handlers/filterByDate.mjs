import { getPosts } from "../api/posts/read.mjs";
import * as templates from "../templates/index.mjs"

const path = location.pathname;

// Filter posts by date with drop down menu
const homePostsContainer = document.querySelector("#homePosts");
const SortPostsByNewest = document.querySelector(".newDate");
const SortPostsByOldest = document.querySelector(".oldDate");

/**
 * This function will sort posts from oldest to newest
 * 
 * @param {string} event posts sorted from oldest to newest
 */
export async function sortPostsByOldest(event) {
    event.preventDefault();
    const posts = await getPosts();
    const sortedFromOldest = posts.sort(byOldest);

    homePostsContainer.innerHTML = "";    
    templates.renderPostTemplates( sortedFromOldest, homePostsContainer ) 
    }

export async function sortPostsByNewest(event) {
    event.preventDefault();
    const posts = await getPosts();
    const sortedFromNewest = posts.sort(byNewest);
        
    homePostsContainer.innerHTML = "";    
    templates.renderPostTemplates( sortedFromNewest, homePostsContainer ) 
    }

    function byOldest(a, b) {
        const dateA = new Date (a.created);
        const dateB = new Date (b.created);
        if (dateA > dateB) return 1;
        else if (dateA < dateB) return -1;
        return 0;
    };

    function byNewest(a, b) {
        const dateA = new Date (a.created);
        const dateB = new Date (b.created);
        if (dateA < dateB) return 1;
        else if (dateA > dateB) return -1;
        return 0;
    }; 
    
    if (path === '/src/index.html') {
        SortPostsByOldest.addEventListener('click', sortPostsByOldest);
        SortPostsByNewest.addEventListener('click', sortPostsByNewest);
    }
     

   