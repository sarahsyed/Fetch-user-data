//This is my target where my profile will appear
const overview = document.querySelector(".overview");
const username = document.querySelector("sarahsyed");

const profile = async function(){
 const data = await fetch(`https://api.github.com/target:users/${username}`);
 const res = data.json;
 console.log(res);
}
profile();