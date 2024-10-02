const axios = require("axios")

async function api(){
    const apidata = await axios.post("https://httpdump.app/dumps/008c5cae-34fc-43dd-ab96-edfbb7e2ae30?a=3", {
        username: "abdullah23",
        password: "23"
    },{
        headers:{
            Authorization: "bearer hbj5hh45j65hhbj"
        },
    },)
    console.log(apidata.data)
}
api()

//except for the get request you can send body as a second argument after url for all methods like
// post, put delete. for get the second agrument will be headers