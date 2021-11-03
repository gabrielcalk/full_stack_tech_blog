const logout_html = document.getElementById('#logout')
const post = document.querySelectorAll('.post')

const logout = async () =>{
  try{
      const res = await fetch('/dashboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } catch(err){
    console.log(err);
  }
}

const nextPage = async (e) =>{
  try{
    const id_post = e.target.getAttribute('data-post')
    const res = await fetch('/dashboard/update/id', {
        method: 'POST',
        body: JSON.stringify({id_post}),
        headers: { 'Content-Type': 'application/json' }
        });
    document.location.replace('/dashboard/update')
  } catch(err){
    console.log(err)
  }
}

logout_html.addEventListener('click', logout)
for(i = 0; i < post.length; i++){
  post[i].addEventListener('click', nextPage)
}