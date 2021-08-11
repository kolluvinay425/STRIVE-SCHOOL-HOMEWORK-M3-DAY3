let apiKey = "563492ad6f91700001000001d50b79d5f6a04660a98a61b2f52bf354";
let url = "https://api.pexels.com/v1/search?query=[dogs] ";

let secondUrl = "https://api.pexels.com/v1/search?query=[tigers]";
let images = document.getElementById("loadData");
let secondImages = document.getElementById("loadData");
const api = async () => {
  const fetchData = await fetch(url, {
    headers: {
      Authorization: "563492ad6f91700001000001d50b79d5f6a04660a98a61b2f52bf354",
    },
  });
  let apidata = await fetchData.json();
  //console.log("api-data:", apidata);
  let button = document.getElementById("loadDataOne");
  let arr = [];
  let images = apidata.photos;
  arr.push(images);
  //console.log("array data: ", arr);
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i];
    //console.log("image-url", arr[i]);
    for (let d of data) {
      //console.log(d.src.large);

      button.innerHTML += `<div id="data" class="card mb-4 shadow-sm">
                          <img src="${d.src.tiny}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>`;
    }
  }
};

const secondApi = () => {
  fetch(secondUrl, {
    request: "get",
    headers: {
      Authorization: "563492ad6f91700001000001d50b79d5f6a04660a98a61b2f52bf354",
    },
  })
    .then((response) => response.json())
    .then((apiData) => {
      buttonTwo(apiData);
      //console.log("apiData: ", apiData);
    })
    .catch((err) => console.log(err));
};

const buttonTwo = (apiData) => {
  let element = document.getElementById("loadDataTwo");
  let arr = [];
  arr.push(apiData);
  for (let i = 0; i < arr.length; i++) {
    let imgData = arr[i].photos;
    //console.log("apiData in loop: ", arr[i].photos);
    for (let data of imgData) {
      //console.log("apiData in Nested loop: ", data.src.tiny);
      element.innerHTML += `<div id="data" class="card mb-4 shadow-sm">
                            <img src="${
                              data.src.tiny
                            }"> class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" onclick="${hideImg()}" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>`;
    }
  }
};
const hideImg = () => {
  let hideBtn = document.querySelector("#data");
  console.log("clicked:", hideBtn);
};
//window.onload = () => {};
