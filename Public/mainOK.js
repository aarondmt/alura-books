const url = "Endereço Http: Server"
const data = {

    "name": "CAD API FRONT",
	"email": "new@menutest0.com",
	"password": "123456",
	"cpf_cnpj": "12345678900",
    "phone": "11999999999",	
	"carBrand": "Fiat",
    "car": "Car",
    "license_plate": "BL24M01" 
}

function newUser() {
    axios.post(url, data)
    .then(res => {
        console.log("Send Data")
    })
    .catch(error => console.log(error))
}
newUser()
