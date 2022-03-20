function validate() {
  let form = document.getElementById('form');
  let email = document.querySelector('#email').value;
  let text = document.querySelector('.text');

  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Tu email es valido';
    text.style.color = '#00ff00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Tu email es invalido';
    text.style.color = '#ff0000';
  }

  if (email == ' ') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
  }
}
