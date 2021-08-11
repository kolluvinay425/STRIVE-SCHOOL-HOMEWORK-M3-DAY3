let apiKey = "563492ad6f91700001000001d50b79d5f6a04660a98a61b2f52bf354";
let url = "https://api.pexels.com/v1/search?query=[your-query] ";
let secondUrl = "https://api.pexels.com/v1/search?query=[your-secondary-query]";
let images = document.getElementById("loadData");

const api = async () => {
  const fetchData = await fetch(url, {
    headers: {
      Authorization: "563492ad6f91700001000001d50b79d5f6a04660a98a61b2f52bf354",
    },
  });
  let apidata = await fetchData.json();
  //console.log("api-data:", apidata);
  let button = document.getElementById("loadData");
  let arr = [];
  let images = apidata.photos;
  arr.push(images);
  //console.log("array data: ", arr);
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i];
    console.log("image-url", arr[i]);
    for (let d of data) {
      console.log(d.src.large);

      button.innerHTML += `<div style=" padding:15px" class="card mb-4 shadow-sm">
                        <img style="height: 250px; width: 300px" src="${d.src.tiny}" alt="">
                        
                        
                        
                        <div style="height: 250px; width: 300px "  class="card-body">
                        <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div
                            class="d-flex justify-content-between align-items-center"
                        >
                            <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                            >
                                View
                            </button>
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                            >
                                Edit
                            </button>
                            </div>
                            <small class="text-muted"></small>
                        </div>
                        </div>
                    </div>`;
    }
  }
};

const secondApi = () => {};
