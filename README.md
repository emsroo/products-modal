This is a lesson about about how to implement the fetch API that provides a javascript interface for making HTTP request and processing the responsed. THis program uses the https://fakestoreapi.com/products to retrieve a bunch of data that is needed

The producs are shown with price and description in a template made by bootstrap.

![image](.\productos\Screenshot 2025-04-11 153653.png)

```
function getData(){
    const options= {"method":"GET"}; 
    fetch(URLMain, options)
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
```



