//This is my target where my profile will appear
const overview = document.querySelector(".overview");
const username = "sarahsyed";

const profile = async function(){
 const res = await fetch(`https://api.github.com/users/${username}`);
 const data = await res.json();
 console.log(data);
 userData(data);
 //console.log(data.public_repos);
}
profile();

const userData = function(data){
    const userInfo = document.createElement("div");
        const name = data.name;
        const bio = data.bio;
        const location = data.location;
        const repos = data.public_repos;
        userInfo.innerText = name;
    
}

    

    
    
    
