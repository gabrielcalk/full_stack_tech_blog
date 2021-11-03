// getting the post button, title value and description from the html
const post = document.querySelector('#post');
const title_update = document.querySelector('#title_update');
const content_update = document.querySelector('#content_update');

/**
 * @funcion updatepage
 * Starting this function after the user click to update the post
 * We are passing the title and description of this post to the back
 */
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

// Adding event on the post button
post.addEventListener('click', updatePage)
