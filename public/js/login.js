const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const button = document.querySelector('#button');


// button.addEventListener('click', async (e) =>{
//     e.preventDefault
//     const user_value = user.value;
//     const email_value = email.value;
//     const pass_value = pass.value;

//     if(user_value && email_value && pass_value){
//         const answer = {
//             user: user_value,
//             email: email_value,
//             pass: pass_value,
//         };

//         const res = await fetch('/login', {
//             method: 'POST',
//             body: JSON.stringify({answer}),
//             headers: { 'Content-Type': 'application/json' }
//         });

//         res ? location.replace('/dashboard')
//         : alert("ERROR: Please, Provide Your's Information Again");
//     } else{
//         alert('Please, Provide All The Informations');
//     }
// })




