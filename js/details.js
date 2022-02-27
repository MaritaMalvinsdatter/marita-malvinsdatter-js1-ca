const newTitle = document.querySelector("title")

const oneBurgerHTML = document.querySelector(".burgerresults");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const urlTwo = "https://burgers1.p.rapidapi.com/burgers/" + id;
const options = { "headers": {
    "x-rapidapi-key": "78bd844603msha9b1f2a81715f8ep181884jsn2834618f18d0",
}};

console.log(urlTwo);

// Selected burger: 

async function getOneBurger() {

    try {
        const response = await fetch(urlTwo, options);
        const json = await response.json();

        console.log(json);

        oneBurgerHTML.innerHTML += `<div><h1> ${json.name}</h1>
                                  <p>You can find this tasty burger at the <a href="${json.web}" class="restaurant-link">${json.restaurant}</a> restaurant</p>
                                  <p>Description: ${json.description}</p>
                                  <p>Ingredients: ${json.ingredients}</p></div>` // need space!!!

        newTitle.innerHTML += `${json.name}`;

    } catch (error) {
        oneBurgerHTML.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

getOneBurger();



