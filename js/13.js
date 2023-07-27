//WORKING WITH PROMISES

const postListPromise = new Promise((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        console.log("GET POST LIST RESPONSE" , data)
        resolve(data); //if the request is successful we call this function with data as argument.
    }).fail(err => {
        reject(new Error(`Call failed ${err.status}`))
    })
})

postListPromise
.then((response) => {
    console.log("Call success")
    console.log("Then response => " , response)
})
.catch((error) => {
    console.warn("Error occurred", error )
})