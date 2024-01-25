const url = "http://localhost:3000/api/add";
const data = {

    name: data.name,
	email: data.email,
	cpf_cnpj: data.cpf_cnpj
}

function newUser() {
    axios.post(url, data)
    .then(res => {
        console.log("Send Data")
    })
    .catch(error => console.log(error))
}
newUser()