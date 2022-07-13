function submitForm() {
  let name = document.getElementById('Name').value;
  let email = document.getElementById('Email').value;
  let number = document.getElementById('Phone').value;
  let medicine = document.getElementById('Medicine').value;
  let address = document.getElementById('Address').value;
  let state = document.getElementById('State').value;
  let city = document.getElementById('City').value;

  let obj = { 'name': name, 'email': email, 'number': number, "medicine": medicine, 'address': address, 'state': state, 'city': city };
  console.log(obj);

  axios({
    method: 'post',
    url: location.protocol + "//" + location.host + '/api/new',
    data: obj,
  }).then((res) => {
    console.log(res);   // () => {}
  })

}

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function () {
  console.log("checkbox changed");
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
    console.log(btn.disabled);
  }
});