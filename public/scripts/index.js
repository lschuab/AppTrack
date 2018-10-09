
const registerForm = document.getElementById('register');
const password = document.getElementById('register-password');
const confirm = document.getElementById('register-confirm');

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

function adaptRegistration() {
  const roleSelect = document.getElementById('role-select');
  if (roleSelect.value === "business") {
    roleSelect.insertAdjacentHTML('afterend', `
    <div class="form-group">
      <label for="company-name-input">Company Name</label>
      <input type="text" class="form-control" id="company-name-input" placeholder="Company Name" name="company_name" required>
    </div>
    <div class="form-group">
      <label for="contact-name-input">Contact Name</label>
      <input type="text" class="form-control" id="contact-name-input" placeholder="Contact Name" name="company_name" required>
    </div>
    `);
  }
}
