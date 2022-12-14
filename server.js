const express = require('express');
const cors = require('cors');
const { response } = require('express');
//const knex = require('knex');

const app = express();
app.use(cors());


let pilots;


async function getAPI() {

  const res = await fetch('https://data.vatsim.net/v3/vatsim-data.json');

  if (res.ok) {
      const data = await res.json();
      
      pilots = data.pilots;
  }
};


function interval() {
  return new Promise(function(resolve, reject) {
    setInterval(function() {                 
      resolve(getAPI())
    }, 60000)
  
  })
}

getAPI();
interval();


app.get('/', (req, res)=> {
 
  res.send(JSON.stringify(pilots));


})



app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})


/*

/ savePositions -> POST ?
/ loadPrevPositions -> GET ?
/ signin -> POST
/ register -> POST
/ save + load fav airports -> POST/GET
/ profile -> GET


 */
