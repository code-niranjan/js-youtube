
// code of execution without blocking a code
// promise is use to networking and to run all server network task in parallel
// console.log('Hello one')


// setTimeout(function(){
//     console.log("hello two after three second")
// },3000)

// console.log('Hello three')

const promiseOne=new Promise(function(resolve,reject){
    // Do an ansync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // resolve is connected to consumed
    },1000)
})


// to consume this promise
// resolve is connected to then
// reject is connected to reject

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved')
})
// resolve to pass value to then

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:{ram:'ram',shyam:'shyam'},password:'123'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.username.ram)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:'benn'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// this below one is chaining syntax

promiseFour.then((user)=>{
    console.log(user)
    return user.username})
.then(function(username){console.log(username)})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('finally has done')
})


const promiseFive=new Promise(function(resolve, reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

//  consumed promise by async
async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()