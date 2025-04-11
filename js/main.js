console.log("soy un script extern productos ")
// Este elemento siempre regresa un array, la primer posicion del main de un array de 1x1
const main = document.getElementsByTagName("main").item(0)
// ==================================
const URLMain = "https://fakestoreapi.com/products/"
// const URLMain= null

//URLS needed  
// https://fakestoreapi.com/products 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch 

function getData() {
    const options= {"method","GET"}
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                // console.log(res.length);
                // console.log(res[0].title);
                createCards(res);
                

            });
        })

        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
            ${err.message}
        </div>`);
        });
}//getData
//type cors se le permite que se llama desde cualquier servidor
// el cors es un servidor security aspect, so i can
// MyOWnserver <-only > MyOWnAPI  (cloud) 
getData();

function createCards(prods) {
    //tooman 20 productos y los mandes a imprimir en tu main
    //puedo imprimir uno y despues mandar los demas y adjacentHTML
    // for (//inicio//condicion//contador)

    // console.log("jelo")
    for (i = 0; i < prods.length; i++) {
        // main.insertAdjacentHTML("beforeend", `<p>Hello</p>`)
        console.log(prods[i].title)

        const modalId = `ExampleModal-${i}`; 
        
        console.log(prods[i].image)
        main.insertAdjacentHTML("beforeend",

            `
        <div class="card" style="width: 18rem;">
        <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}" style="height:300px; object-fit:contain;">
        <div class="card-body">
        <h5 class="card-title">${prods[i].title}</h5>
        <p class="card-text">${prods[i].description.slice(0, 50)} y el precio es $ ${prods[i].price}</p>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#${modalId}">Abrir Modal (Saber mas del producto)</a>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${prods[i].title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${prods[i].description} <b><br>Precio==$${prods[i].price}</b>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Comprarlo $_$</button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        `)

        // console.log(prods[i].title)
    }

};

