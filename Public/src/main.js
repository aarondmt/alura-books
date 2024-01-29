const url = "http://localhost:3001/register"
const sendRegister = document.querySelector(".register");
sendRegister.addEventListener('click', (e) => {
  e.preventDefault() 
});

/*Register Submit*/
sendRegister.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    //location.reload();
  },2500);
});

/*Send Form*/
const data =  {

  name: req.body.name,
  email: req.body.email,
  isAdmin: req.body.admin,
  password: req.body.password,
  cpf_cnpj: req.body.cpf_cnpj,
  phone: req.body.phone,
  carBrand: req.body.carBrand,
  car: req.body.car,
  license_plate: req.body.license_plate
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

/*Message Alert*/
function viewAlert(){                                  
    swal({                   
      title:"Seu Cadastro foi concluído",
      text:"MENUParking lhe dá Boas Vindas!",
      icon:"success",
      buttons: false,
      timer: 3500              
    })
  };