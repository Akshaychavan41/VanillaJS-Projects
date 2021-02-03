let main  = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillion = document.getElementById("show-millionaires");
const sortBy = document.getElementById("sort");
const calculateWealth = document.getElementById("calculate-wealth");


let data = []
getRandomUser()
async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api")
    const data1 = await res.json()
    
    const user  = data1.results[0]

    const newUser = {
        name:  `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000)
    }
    addData(newUser);
}

function addData(obj) {
    data.push(obj)
    updateDom();
}
function updateDom(providedData = data) {
    main.innerHTML = `<h2><strong>Person</strong> Money</h2>`

    providedData.forEach( (ele) => {
        let div  =  document.createElement("div");
        div.classList.add("person");
        div.innerHTML = `<strong>${ele.name}</strong> ${ele.money}`
        main.appendChild(div)
    })
   
}

function doubleMoney() {
    data = data.map( (user) => {
       return { ...user , money : user.money*2};
    })
    updateDom()
}


function showMillionFilter() {
    data  = data.filter((user) => user.money > 1000000)
    updateDom()
}

function sortByFunc() {
    data.sort((a,b) => b.money-a.money)
    updateDom()
}

function calculateWealthFunc( ) {
    const total =  data.reduce( (acc, user) => (acc+=user.money) , 0)
    const totalEl =  document.createElement("div");
    totalEl.innerHTML = `<h3><strong>Total Wealth</strong> ${total}</h3>`;
    main.appendChild(totalEl)
}
addUser.addEventListener("click", getRandomUser)
double.addEventListener("click", doubleMoney)
showMillion.addEventListener("click", showMillionFilter)
sortBy.addEventListener("click", sortByFunc)
calculateWealth.addEventListener("click", calculateWealthFunc)