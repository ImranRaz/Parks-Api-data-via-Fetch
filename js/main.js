
function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }
  
  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

const parkName = document.querySelector('#parks h5');
const parkDesc = document.querySelector('#parks p');
const parkAddress = document.querySelector('#parks span')
const parkImage = document.querySelector('#parks img')
const parkwebsite = document.querySelector('#parks a')

const parksUrl ='https://developer.nps.gov/api/v1/parks?stateCode=FL&api_key=dReu8K3goYGqsm4HHgGefp2CD58Ls8nrkArlf9I2'


const parkUpdateUISuccess = function(parsedData) {
    // const parsedData = JSON.parse(data);
    console.log(parsedData);

    // parkName.textContent = parsedData.data[0].fullName;
    // parkName.href = parsedData.data[0].url;
    // parkDesc.textContent = parsedData.data[0].description;
    // parkImage.src = parsedData.data[0].images[1].url;
    // parkwebsite.href = parsedData.data[0].url;
    let parks = parsedData.data;
    console.log(parks)
    return parks.map(function(park){
        parkName.textContent = park.fullName;
        parkDesc.textContent = park.description;
        parkImage.src = park.images[0].url;
        parkwebsite.href = park.url;
       

    })
  }

  const parkUpdateUIError = function(error) {
    console.log(error);
  };

const createRequest = function (url, Succeed, fail){
    fetch(url)
      .then((response) => response.json())
      .then((data) =>  Succeed(data));
  }

  window.addEventListener('DOMContentLoaded', () => {
    createRequest(parksUrl, parkUpdateUISuccess, parkUpdateUIError);
  })