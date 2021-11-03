const id_post = JSON.parse(localStorage.getItem('id_post'));
const post = document.querySelector('#post');
const title_update = document.querySelector('#title_update');
const content_update = document.querySelector('#content_update');


const updatePage = async () =>{
    try{
        const title_update_value = title_update.value.trim()
        const content_update_value = content_update.value.trim()
        const res = await fetch('/dashboard/update', {
            method: 'PUT',
            body: JSON.stringify({
                title: title_update_value,
                description: content_update_value
            }),
            headers: { 'Content-Type': 'application/json' }
            });
        if(res.ok){
            document.location.replace('/dashboard/')
        } else{
            alert('Please, try again')
        }
    }catch(err){
        console.log(err)
    }
}

post.addEventListener('click', updatePage)
