const url = "Endereço Http: Server"
const data = {

    "name": name,
	"email": email,
	"password": password,
	"cpf_cnpj": cpf_cnpj,
    "phone": phone,	
	"carBrand": carBrand,
    "car": car,
    "license_plate": license_plate 
}

 async function newUser() {
     await axios.post(url, data)
    .then(res => {
        console.log("Dados enviados com sucesso para API!")
    })
    .catch(res => {
        console.log("Dados não enviado para API!!!")
    })    
}
newUser()
