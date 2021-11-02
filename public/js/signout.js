const logout_html = document.getElementById('#logout')

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
console.log('hey')
}

logout_html.addEventListener('click', logout)