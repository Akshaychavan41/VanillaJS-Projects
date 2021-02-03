let resElement = document.getElementById("result")
let fooElement = document.getElementById("footer")
const token = "9qrf1ORx71vmcefqysZwJnxIczoPVYcD_sRi5m0BmBE"
const searchQuery = document.getElementById("searchQuery").value
const url = `https://api.unsplash.com/search/photos/?client_id=${token}&query=${searchQuery}`
function searchPhoto() {
    console.log(searchQuery);
    console.log(url);
    resElement.innerHTML = ""
    fetch(url).then( (data) => {
        return data.json()
    }).then((res) => {
        console.log(res.results);
        res.results.forEach(element => {
            let img = `<img src = "${element.urls.regular}"> <p class="desc" id="desc">${element.alt_description}</p>`
          
            let div  = document.createElement("div")
            div.id = "card"
            div.className = "card"
            div.innerHTML = img
            resElement.appendChild(div)
        });
    })

  
}

