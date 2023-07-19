// function get data waifu with fetch
function getWaifus(tag) {
  const apiUrl = "https://api.waifu.im/search"; // Replace with the actual API endpoint URL
  const params = {
    included_tags: tag,
    height: ">=1000",
    byte_size: "<=1000000",
  };

  const queryParams = new URLSearchParams(params);
  const requestUrl = `${apiUrl}?${queryParams}`;

  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process the response data as needed
      ganerateWaifus(data);
    })
    .catch((error) => {
      console.error("An error occurred:", error.message);
    });
}

//nav togller
const navToggler = document.getElementById("nav-toggle");
const navLinkList = document.getElementById("nav-link-list");
navToggler.addEventListener("click", function () {
  navLinkList.classList.toggle("active");
});

function ganerateWaifus(data) {
  data.images.forEach((image) => {
    let waifuImg = document.getElementById("waifu-img");

    let preload = document.getElementById("preload");
    preload.classList.toggle("active");
    waifuImg.onload = function () {
      preload.classList.toggle("active");
    };
    waifuImg.src = image.url;
  });
}

getWaifus("uniform");
document.getElementById("l").addEventListener("click", function () {
  getWaifus("uniform");
});
