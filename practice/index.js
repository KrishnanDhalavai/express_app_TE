const { isUtf8 } = require("buffer");
const fs = require("fs");
/*I use this to basically practice JS code!
   
   Also this is a multi-line comment!*/

/* setTimeout example
setTimeout(() => {
   console.log("hello after 1 second!")
}, 1000);*/

/*Error first callback readFile example!
fs.readFile("test2.txt", {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error("ERROR FOUND!");
        console.error(err);
    } else {
        console.log(data);
    }
});*/

/*Promises for the same above thing
const readFilepromise = new Promise((resolve, reject) => {
    fs.readFile("test.txt", { encoding: 'utf-8'}, (err, data) => {
        if (err){
            reject(err)
        } else{
            resolve(data);
        }
    });
})
readFilepromise.then(data => console.log(data))
.catch(err => console.log(err));*/

/* More efficient way of writing the above thing!
fs.promises.readFile("test.txt", {encoding: 'utf-8'})
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

/*Using fetch which is a promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));*/

/*The same way we did but using modern Async/await method and use try and catch block to handle error!
    const loadFile = async () => {
        try {
        const data = await fs.promises.readFile("test2.txt", {encoding: 'utf-8'});
        console.log(data);
            } catch (error) {
        console.error(error);
    }
};
loadFile();*/