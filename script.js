const inputs = document.querySelectorAll('.input-login');
const button = document.querySelector('.btn-login');

const handleFocus = ({ target }) => {
  target.previousElementSibling.classList.add('span-active');
}

const handleFocusout = ({ target }) => {
  if (target.value === '') {
    target.previousElementSibling.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', true);
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout));
inputs.forEach((input) => input.addEventListener('input', handleChange));
