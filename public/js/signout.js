const logout_html = document.getElementById('#logout')
const post = document.querySelector('.post')

const logout = async () =>{
    const res = await fetch('/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

const nextPage = async (e) =>{
  const id_post = e.target.getAttribute('data-post')
  const res = await fetch('/dashboard/update/id', {
      method: 'POST',
      body: JSON.stringify({id_post}),
      headers: { 'Content-Type': 'application/json' }
      });
  document.location.replace('/dashboard/update')
}

logout_html.addEventListener('click', logout)
post.addEventListener('click', nextPage)