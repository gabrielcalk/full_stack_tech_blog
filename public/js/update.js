const id_post = JSON.parse(localStorage.getItem('id_post'));
const post = document.querySelector('#post')

const showInputs = async() =>{

}

const updatePage = async () =>{
    const res = await fetch('/dashboard/update', {
        method: 'PUT',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
        });
    if(res.ok){
        document.location.replace('/dashboard/')
    } else{
        alert('Please, try again')
    }
}

post.addEventListener('click', updatePage)
showInputs();