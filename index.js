// Add your code here


function submitData(name, email){

fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
            name,
            email
        })
})
.then( function ( response ) {
        return response.json()
        } )
.then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
        } )
.catch(error=> {
    document.body.innerHTML =  error.message
    })
    
}

























// function submitData( user_name, user_email){
//     return fetch("http://localhost:3000/users", { 
//         method : "POST",
//         headers : {
//             "Content-Type": "application/json",
//             "Accept" : "application/json",
//         },
//         body : JSON.stringify({
//             name, //: user_name,
//             email  //: user_email,
//         })
//     })
//     // .then(response=>response.json())
//     .then( function ( response ) {
//         return response.json()
//         } )
//     .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//         } )

//     // return fetch
// }