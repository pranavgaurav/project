// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         },3000);
//     })
// }

async function getData() {
    let x=  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {
    
    console.log("Load Data")
    console.log("Do Something")

    let data = await getData()
    console.log(data)
    console.data("Process.data")
}