document.getElementById('save').addEventListener('click',function(){
  localStorage.setItem('email',document.getElementById('email').value)
})