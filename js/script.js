
// FIND AN API

// 1. Fetch an array of results and display at least 3 different properties inside the HTML:


const url = "https://burgers1.p.rapidapi.com/burgers";
const options = { "headers": {
    "x-rapidapi-key": "78bd844603msha9b1f2a81715f8ep181884jsn2834618f18d0",
}};

const resultsHTML = document.querySelector(".resultscontainer");

async function getBurgers() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data);

        resultsHTML.innerHTML = " ";

        for (let i =0; i< data.length; i++){
            // console.log(data[i])

            if (i === 15) {
                break;
            }

            if (data[i].web.startsWith("www")) {
                continue;
            }

            if (data[i].description === "N/A") {
                continue;
            }


        resultsHTML.innerHTML += `<a href="/details.html?id=${data[i].id}">
        <div class="result">
        <p>Burger: ${data[i].name}</p>
        <p>Restaurant: ${data[i].restaurant}</p>
        <p>Description: ${data[i].description}</p>
        </div>
        </a>`
    }

    } catch (error) {
        resultsHTML.innerHTML += `An error has occured, please try again or contact us`;
    }
}

getBurgers()





