const URL = "https://meme-api.com/gimme/wholesomememes";
const btn = document.getElementById("meme-btn");
const image = document.getElementById("meme-img");


const generateMeme = async () =>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.url);
    image.src = `${data.url}`;
    console.log(data.author);
};

btn.addEventListener("click", ()=>{
    generateMeme();
});