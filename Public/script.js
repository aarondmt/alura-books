/*Fields Form*/
let form = document.querySelector('#formUser');
let name = document.querySelector('#name');
let txtName = document.querySelector('#txtName');
let cpf_cnpj = document.querySelector('#cpf_cnpj');
let txtCpf_cnpj = document.querySelector('#txtCpf_cnpj');
let email = document.querySelector('#email');
let txtEmail = document.querySelector('#txtEmail');
let phoneExt = document.querySelector('#phone');
let txtPhone = document.querySelector('#txtPhone');

let car = document.querySelector('#car');
let txtCar = document.querySelector('#txtCar');
let license_plate = document.querySelector('#license_plate');
let txtLicense_plate = document.querySelector('#txtLicense_plate');

/*Const Page Form*/
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".starNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener('click', (e) => {
  e.preventDefault() 
});

const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

/*Progress Bar Next*/
nextBtnFirst.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;  
});
nextBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
/*Submit*/
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    location.reload();
  },2500);
});
/*Progress Bar Prev*/
prevBtnSec.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
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
/*View Password*/
document.getElementById('fa-eye').addEventListener('mousedown', function() {
  document.getElementById('password').type = 'text';
});
document.getElementById('fa-eye').addEventListener('mouseup', function() {
  document.getElementById('password').type = 'password';
});
document.getElementById('fa-eye').addEventListener('mousemove', function() {
  document.getElementById('password').type = 'password';
});
document.getElementById('fa-eye2').addEventListener('mousedown', function() {
  document.getElementById('passwordRepeat').type = 'text';
});

document.getElementById('fa-eye2').addEventListener('mouseup', function() {
  document.getElementById('passwordRepeat').type = 'password';
});
document.getElementById('fa-eye2').addEventListener('mousemove', function() {
  document.getElementById('passwordRepeat').type = 'password';
});
//View Pass for Phone
window.addEventListener('load', function(){
      
  var viewPass = document.getElementById('fa-eye');
  var keyPass = document.getElementById('password');        
  
  viewPass.addEventListener('touchstart', function(e){
    keyPass.type = 'text';
      e.preventDefault();
  }, false);
  viewPass.addEventListener('touchmove', function(e){
    keyPass.type = 'text';
      e.preventDefault();
  }, false);
  viewPass.addEventListener('touchend', function(e){
    keyPass.type = 'password';
      e.preventDefault();
  }, false);
}, false);

var viewPassRepeat = document.getElementById('fa-eye2');
var keyPassRepeat = document.getElementById('passwordRepeat');

viewPassRepeat.addEventListener('touchstart', function(e){
  keyPassRepeat.type = 'text';
    e.preventDefault();
}, false);
viewPassRepeat.addEventListener('touchmove', function(e){
  keyPassRepeat.type = 'text';
    e.preventDefault();
}, false);
viewPassRepeat.addEventListener('touchend', function(e){
  keyPassRepeat.type = 'password';
    e.preventDefault();
 }, false);
/*Mask Phone*/
const phoneValid = document.getElementById('phone')

phoneValid.addEventListener('keypress', (e) => maskPhone(e.target.value))
phoneValid.addEventListener('change', (e) => maskPhone(e.target.value))

const maskPhone = (valueMask) => {
  valueMask = valueMask.replace(/\D/g, "")
  valueMask = valueMask.replace(/^(\d{2})(\d)/g, "($1) $2")
  valueMask = valueMask.replace(/(\d)(\d{4})$/, "$1-$2")
    phoneValid.value = valueMask
  }
  /*Background Squares*/
const ulSquares = document.querySelector('ul.squares');

for ( let i = 0; i < 13; i++ ) {
  const li = document.createElement('li');

  const random = (min, max) => Math.random() * (max - min) + min
  
  const size = Math.floor(random(10, 120));
  const position1 = random(68, 99);
  const position2 = random(1, 32);
  i == 0 ? delay = 1 : delay = random(5, 0.1);
  const duration = random(24, 12);
  let position = Number
  if (i % 2 == 0) {
    position = position1;
  } else {
    position = position2
    li.style.animationDirection = 'reverse';
  }
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}`;

  ulSquares.appendChild(li);
}
/*Validate Button Next*/
form.addEventListener('keyup', () => {
    if (Name.value.length  <= 2) {    
    Name.setAttribute('style', 'border: 2px solid red')
    txtName.setAttribute('style','color: red')
    txtName.innerHTML = 'Preencha seu nome corretamente!'    
  } else{
    Name.removeAttribute('style', 'border: 2px solid red')
    txtName.removeAttribute('style')
    txtName.innerHTML = 'Nome'
    nextBtnFirst.disabled = false;    
  } 
    });
form.addEventListener('keyup', () => {
      if (cpf_cnpj.value.length <= 2) {    
      cpf_cnpj.setAttribute('style', 'border: 2px solid red')
      txtCpf_cnpj.setAttribute('style','color: red')
      txtCpf_cnpj.innerHTML = 'Preencha seu CPF corretamente!'      
    } else{
      cpf_cnpj.removeAttribute('style', 'border: 2px solid red')
      txtCpf_cnpj.removeAttribute('style')
      txtCpf_cnpj.innerHTML = 'CPF'
      nextBtnFirst.disabled = false;      
    }
     });
form.addEventListener('keyup', () => {
      if (email.value.length  <= 10) {    
      email.setAttribute('style', 'border: 2px solid red')
      txtEmail.setAttribute('style','color: red')
      txtEmail.innerHTML = 'Insira um e-mail válido!'      
    } else{
      email.removeAttribute('style', 'border: 2px solid red')
      txtEmail.removeAttribute('style')
      txtEmail.innerHTML = 'E-mail Válidado'
      nextBtnSec.disabled = false;
    }
      });
form.addEventListener('keyup', () => {
        if (phone.value.length <= 14) {    
        phone.setAttribute('style', 'border: 2px solid red')
        txtPhone.setAttribute('style','color: red')
        txtPhone.innerHTML = 'Insira um número de telefone!'
      } else{
        phone.removeAttribute('style', 'border: 2px solid red')
        txtPhone.removeAttribute('style')
        txtPhone.innerHTML = 'Telefone Válidado'
        nextBtnSec.disabled = false;
      }
       });
form.addEventListener('keyup', () => {
        if (car.value.length  <= 1) {    
        car.setAttribute('style', 'border: 2px solid red')
        txtCar.setAttribute('style','color: red')
        txtCar.innerHTML = 'Informe modelo do veículo!'
      } else{
        car.removeAttribute('style', 'border: 2px solid red')
        txtCar.removeAttribute('style')
        txtCar.innerHTML = 'Modelo do veículo'
        nextBtnThird.disabled = false;
      }
        });
form.addEventListener('keyup', () => {
          if (license_plate.value.length  <= 6) {    
            license_plate.setAttribute('style', 'border: 2px solid red')
          txtLicense_plate.setAttribute('style','color: red')
          txtLicense_plate.innerHTML = 'Informe a placa do veículo!'
        } else{
          license_plate.removeAttribute('style', 'border: 2px solid red')
          txtLicense_plate.removeAttribute('style')
          txtLicense_plate.innerHTML = 'Placa do veículo'
          nextBtnThird.disabled = false;
        }
          });
form.addEventListener('keyup', () => {
          if (password.value.length <= 5) {    
          password.setAttribute('style', 'border: 2px solid red')
          txtPassword.setAttribute('style','color: red')
          txtPassword.innerHTML = 'Senha* minímo 6 digítos'
        } else{
          password.removeAttribute('style', 'border: 2px solid red')
          txtPassword.removeAttribute('style')
          txtPassword.innerHTML = 'Seha criada com sucesso!'
          submitBtn.disabled = false;
        }
         });
form.addEventListener('keyup', () => {
          if (password.value != passwordRepeat.value) {    
          passwordRepeat.setAttribute('style', 'border: 2px solid red')
          txtPasswordRepeat.setAttribute('style','color: red')
          txtPasswordRepeat.innerHTML = 'Senha não confere!'
        } else{
          passwordRepeat.removeAttribute('style', 'border: 2px solid red')
          txtPasswordRepeat.removeAttribute('style')
          txtPasswordRepeat.innerHTML = 'Senha Confirmada!'
          submitBtn.disabled = false;
        }
          });