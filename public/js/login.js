const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const button = document.querySelector('#button');


button.addEventListener('click', async (e) =>{
    e.preventDefault()
    const email_value = email.value.trim();
    const pass_value = pass.value.trim();

    if(email_value && pass_value){
        const answer = {
            email: email_value,
            pass: pass_value,
        };

        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({answer}),
            headers: { 'Content-Type': 'application/json' }
        });

        if(res.ok){
            document.location.replace('/dashboard')
        } else{
            alert('Email or Password Incorrect, Please Try Again')
        }
    } else{
        alert('Please, Provide All The Informations');
    }
})




