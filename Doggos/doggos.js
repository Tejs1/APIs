const container = document.querySelector('.container')
const section = document.querySelector('.section')
const output = document.querySelector('.output')
const btn = document.querySelector('.btn')
const GET_DOGGOS = "https://dog.ceo/api/breeds/image/random";



function addNewDoggo() {
    promise = fetch(GET_DOGGOS)
    promise
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise
        })
        .then((processedResponse) => {
            const img = document.createElement("img")
            img.src = processedResponse.message
            img.alt = "Cute doggo";
            output.appendChild(img);
        });
}

 btn.addEventListener("click", get50)
function get50(){
    for(i=0; i<50; i++){
        addNewDoggo()
    }

}


VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xe3d4d4,
    color2: 0xcabfbf,
    backgroundColor: 0xfdf8f3,
    size: 1,
  });
  