
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

function adaptRegistration() {
  const roleSelect = document.getElementById('role-select');
  const businessFields = document.getElementById('business-fields');
  if (roleSelect.value === "business") {
    const businessFields = document.getElementById('business-fields');
    businessFields.innerHTML = `
    <div class="form-group">
      <label for="company-name-input">Company Name</label>
      <input type="text" class="form-control" id="company-name-input" placeholder="Company Name" name="company_name" required>
    </div>
    <div class="form-group">
      <label for="contact-number-input">Contact Number</label>
      <input type="tel" class="form-control" id="contact-number-input" placeholder="Contact Number" name="phone_number">
    </div>
    <div class="form-group">
      <label for="company-url-input">Company URL</label>
      <input type="text" class="form-control" id="company-url-input" placeholder="Company URL" name="company_url">
    </div>
    `;
  } else {
    businessFields.innerHTML = ``;
  }
}
