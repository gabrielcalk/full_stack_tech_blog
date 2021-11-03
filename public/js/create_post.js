const create_post = document.querySelector('#create_post');
const title = document.querySelector('#title_post');
const content = document.querySelector('#content');


create_post.addEventListener('click', async (e) =>{
    try{
        e.preventDefault()

        const title_value = title.value.trim();
        const content_value = content.value.trim();

        if(title_value && content_value){
            const answer = {
                title: title_value,
                description: content_value,
            }
            const res = await fetch('/dashboard/post',{
                method:'POST',
                body: JSON.stringify({answer}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(res.ok){
                document.location.replace('/dashboard')
            }
        } else{
            alert('Please, Provide All The Information')
            return
        }
    }catch(err){
        console.log(err)
    }
})