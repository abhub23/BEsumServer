const axios = require("axios")

function api1(){
    fetch("http://localhost:3000/todos")
    .then( async response => {
        const json = await response.json()
        console.log(json)
    })
}
api1()

async function api2(){
        const res = await fetch("http://localhost:3000/todos")
            const json = await res.json()
            console.log(json)
    }
api2()    

function api3(){
    axios.get("http://localhost:3000/todos")
    .then(response => {
        const json = response.data
        console.log(json)
    })
}
api3()

async function api4(){
    const res = await axios.get("http://localhost:3000/todos")
        console.log(res.data.todos.length)
    }

api4()

// Both Fetch and axios will return a promise and if the function in which they are wrapped in
// is an async function the api will await until the data is resolved