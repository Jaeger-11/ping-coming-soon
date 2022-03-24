const button = document.getElementById('btn');
const email = document.querySelector('.email')
const form = document.getElementById('form')
const text = document.querySelector('.error')

pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
console.log(email)

button.addEventListener('click', setMessage)

function setMessage(){
    email.className = 'empty'
    if(email.value.match(pattern)){
        console.log('success')
        email.classList.remove('email warning')
        text.innerHTML = "Email is Valid"
    }  else if (email.value === ''){
        email.className = 'warning'
        text.innerHTML = "Whoops! It looks like you forgot to add your email"
    }
    else {
        email.className = 'warning'
        text.innerHTML = 'Please provide a valid email address'
    } 
}