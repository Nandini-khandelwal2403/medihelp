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
}