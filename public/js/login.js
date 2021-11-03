// Getting the email, password and button
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const button = document.querySelector('#button');

/**
 * @funcion login
 * Starting one function after the user click to login
 */
button.addEventListener('click', async (e) =>{
    try{
        e.preventDefault()
        const email_value = email.value.trim();
        const pass_value = pass.value.trim();

        if(email_value && pass_value){
            const answer = {
                email: email_value,
                pass: pass_value,
            };
// Posting this informations to check on the db
            const res = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({answer}),
                headers: { 'Content-Type': 'application/json' }
            });
// If response is ok, then move he/she do the dashboard
            if(res.ok){
                document.location.replace('/dashboard');
            } else{
                alert('Email or Password Incorrect, Please Try Again');
            }
        } else{
            alert('Please, Provide All The Informations');
        }
    }catch(err){
        console.log(err);
    }
});




