const url = "https://mtsdata-f842.restdb.io/rest/mts-data-1";

const options = {
  headers: {
    "x-apikey": "63275d310282ae17e4905def",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => handlePics(data));

function handlePics(data) {
console.log(data)
}

