const url = "https://mtsdata-f842.restdb.io/rest/mts-data-1";

const options = {
  headers: {
    "x-apikey": "63275d310282ae17e4905def",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => handleData(data));

function handleData(rawData) {
  const data = rawData[0];
  document.querySelector(".header-title").textContent = data.header_title;
  document.querySelector(".contact-link").textContent = data.header_btn;

  document.querySelector(".hero-title").textContent = data.hero_title;
  document.querySelector(".hero-subtitle").textContent = data.hero_subtitle;
  document.querySelector(".hero-link").textContent = data.hero_btn;

  document.querySelector(".strength1-title").textContent = data.strength1_title;
  document.querySelector(".strength1-txt").textContent = data.strength1_txt;
  document.querySelector(".strength1-img").src = "./assets/dummy.jpg";
  // document.querySelector(".strength1-img").src = "./assets/" + data.strength1_img;

  document.querySelector(".strength2-title").textContent = data.strength2_title;
  document.querySelector(".strength2-txt").textContent = data.strength2_txt;
  document.querySelector(".strength2-img").src = "./assets/dummy.jpg";
  // document.querySelector(".strength2-img").src = "./assets/" + data.strength2_img;

  document.querySelector(".strength3-title").textContent = data.strength3_title;
  document.querySelector(".strength3-txt").textContent = data.strength3_txt;
  document.querySelector(".strength3-img").src = "./assets/dummy.jpg";
  // document.querySelector(".strength3-img").src = "./assets/" + data.strength3_img;

  if(data.strength4_title) {
    document.querySelector(".strength4-title").textContent = data.strength4_title;
    document.querySelector(".strength4-txt").textContent = data.strength4_txt;
    document.querySelector(".strength4-img").src = "./assets/dummy.jpg";
    // document.querySelector(".strength4-img").src = "./assets/" + data.strength4_img;
  } else {
    document.querySelector("#strength4").classList.add("hidden");
  }

  document.querySelector(".product1-title").textContent = data.product1_title;
  document.querySelector(".product1-txt").textContent = data.product1_txt;
  document.querySelector(".product1-btn").textContent = data.product1_btn;
  document.querySelector(".product1-img").src = "./assets/dummy.jpg";
  // document.querySelector(".product1-img").src = "./assets/" + data.product1_img;

  document.querySelector(".product2-title").textContent = data.product2_title;
  document.querySelector(".product2-txt").textContent = data.product2_txt;
  document.querySelector(".product2-btn").textContent = data.product2_btn;
  document.querySelector(".product2-img").src = "./assets/dummy.jpg";
  // document.querySelector(".product2-img").src = "./assets/" + data.product2_img;

  document.querySelector(".product3-title").textContent = data.product3_title;
  document.querySelector(".product3-txt").textContent = data.product3_txt;
  document.querySelector(".product3-btn").textContent = data.product3_btn;
  document.querySelector(".product3-img").src = "./assets/dummy.jpg";
  // document.querySelector(".product3-img").src = "./assets/" + data.product3_img;





  
}


