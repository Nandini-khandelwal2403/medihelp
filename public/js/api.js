function submitForm() {
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let number = document.getElementById('Number').value;
    let address = document.getElementById('Address').value;
    let state = document.getElementById('State').value;
    let city = document.getElementById('City').value;

    let obj = { 'Name': name, 'Email': email, 'Number': number, 'Address': address, 'State': state, 'City': city };
    console.log(obj);

    axios({
        method: 'post',
        url: location.protocol + "//" + location.host + '/api/new',
        data: obj,
    }).then((res) => {
        console.log(res);   // () => {}
    })

    const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
}