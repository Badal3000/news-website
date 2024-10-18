const apiKey = "951615d32a9b4d0190510fc1e2ea2e04";
const newsContainer = document.getElementById("cards");
const searchForm = document.querySelector(".search-bar");
const searchInput = document.getElementById("searchInput");

const laguageDropdown = document.getElementById("language");
languageDropdown.addEventListener("submit", (event)=>{
    event.preventDefault();
    const query2 = languageDropdown.value.trim();
    console.log("search query2:", query2);
    
})


function changeLang(query2){
    fetch(`https://newsapi.org/v2/everything?q=${query2}&language=${query}&apiKey=${apiKey}`);
    
}

function fetchNews(query) {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
        .then((res) => res.json())
        .then(loadNews)
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const query = searchInput.value.trim();
    console.log("Search Query:", query); 
    if (query) {
        newsContainer.innerHTML = "";
        fetchNews(query); 
    } else {
        console.log("Please enter a search term."); 
    }
});
function showNews(data) {
    data.forEach(news => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const source = document.createElement("span");
        const image = document.createElement("img");
        const title = document.createElement("h3");
        const author = document.createElement("span");
        const published = document.createElement("p");

        source.classList.add("source");
        source.innerText = news.source.name;
        image.classList.add("img");
        image.src = news.urlToImage;
        image.alt = news.title;

        title.classList.add("title");
        title.innerText = news.title;

        author.className = "author published";
        author.innerText = `${news.author} . ${new Date(news.publishedAt).toLocaleString()}`;

        published.classList.add("description");
        published.innerText = news.description;

        newCard.append(source, image, title, author, published);
        newsContainer.append(newCard);
    });
}
function loadNews(data) {
    console.log("Loading News .... ", data);
    showNews(data.articles);
}
fetchNews("murder");