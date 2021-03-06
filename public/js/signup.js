// Getting the username, email, password and button from html
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const button = document.querySelector('#button');

/**
 * @funcion Signup
 * Starting this function after the user click on signup
 * We are posting the inputs to the back
 */
button.addEventListener('click', async (e) =>{
    try{
        e.preventDefault()
        const user_value = user.value.trim();
        const email_value = email.value.trim();
        const pass_value = pass.value.trim();

        if(user_value && email_value && pass_value){
            const answer_signup = {
                username: user_value,
                email: email_value,
                password: pass_value,
            };
            const res = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({answer_signup}),
                headers: { 'Content-Type': 'application/json' }
            });

            if(res.ok){
                document.location.replace('/dashboard')
            } else{
                alert('ERROR: Please Try Again')
            }
        } else{
            alert('Please, Provide All The Informations');
        }
    } catch(err){
        console.log(err)
    }
})




