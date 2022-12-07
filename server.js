const express = require('express');
const cors = require('cors');
//const knex = require('knex');

const app = express();
app.use(cors());





const getAPI = async () => {
  const res = await fetch('https://data.vatsim.net/v3/vatsim-data.json');

  if (res.ok) {
      const data = await res.json();

      return data.pilots;
  }
};




app.get('/', (req, res)=> {
  getAPI().then(res.send.bind(res));
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