//This is my target where my profile will appear
const overview = document.querySelector(".overview");
const username = "sarahsyed";
const unorderedRepoList = document.querySelector(".repo-list");

const profile = async function(){
 const res = await fetch(`https://api.github.com/users/${username}`);
 const data = await res.json();
 console.log(data);
 userData(data);
   
}
profile();

const userData = function(data){
    const div = document.createElement("div");
      
        div.classList.add("user-info");
        div.innerHTML = (`
        <figure>
        <img alt="user avatar" src= ${data.avatar_url}/>
        </figure>
    <div>
      <p><strong>Name:</strong>${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    
    </div> 
        `)
     overview.append(div);  
     fetchRepos(); 
    
}

const fetchRepos = async function(){
    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100 `);
    const reposData = await repoRes.json();
    console.log("List of repos ", reposData);
    displayRepo(reposData);
}

const displayRepo = function(repos){
    for (var repo of repos){
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h2>${repo.name}</h2>`;
        console.log(repoItem.innerHTML = `<h2>${repo.name}</h2>`);
        unorderedRepoList.append(repoItem);

    }
}
    
