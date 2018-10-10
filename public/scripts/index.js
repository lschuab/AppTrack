
const registerForm = document.getElementById('register');
const password = document.getElementById('password-input');
const confirm = document.getElementById('confirm-input');

const mismatch = document.getElementById("mismatch");


registerForm.addEventListener('submit', (e) => {
  if (password.value !== confirm.value) {
    e.preventDefault();
    password.value = '';
    confirm.value = '';
    if(mismatch.classList.contains('hidden')) {
      mismatch.classList.remove('hidden');
    }
    mismatch.classList.remove('hidden');
    return false;
  } else {
    if(!mismatch.classList.contains('hidden')) {
      mismatch.classList.add('hidden');
    }
    return true;
  }
});
