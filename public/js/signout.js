// Getting the logout button and the posts
const logout_html = document.getElementById('#logout')
const post = document.querySelectorAll('.post')

/**
 * @funcion logout
 * Starting this function after the user click on the button to logout
 */
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

/**
 * @funcion nextpage
 * Starting this function after the user select one post
 * We are passing the id of this post to the back
 */
const nextPage = async (e) =>{
  try{
    const id_post = e.target.getAttribute('data-post')
    const res = await fetch('/dashboard/update/id', {
        method: 'POST',
        body: JSON.stringify({id_post}),
        headers: { 'Content-Type': 'application/json' }
        });
    // replace the location after post the post id
    document.location.replace('/dashboard/update')
  } catch(err){
    console.log(err)
  }
}

// Adding event on the logout button and on the posts
logout_html.addEventListener('click', logout)
for(i = 0; i < post.length; i++){
  post[i].addEventListener('click', nextPage)
}