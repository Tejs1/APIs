const container = document.querySelector('.container')
const section = document.querySelector('.section')
const output = document.querySelector('.output')
const btn = document.querySelector('.btn')
const GET_DOGGOS = "https://dog.ceo/api/breeds/image/random";



function addNewDoggo() {
    promise = fetch(GET_DOGGOS);
    promise
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processedResponse) => {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            output.appendChild(img);
        });
}

 btn.addEventListener("click", get50);
function get50(){
    for(i=0; i<50; i++){
        addNewDoggo()
    }

}