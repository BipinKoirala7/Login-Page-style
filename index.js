const username = document.getElementById('user-name')
const useremail = document.getElementById('user-email')
const userpass = document.getElementById('user-password')
const submitUserInfo = document.getElementById('submit-user-info')
const emailvalidity = document.querySelector('.check-valid-email')
const namevalidity = document.querySelector('.check-valid-name')
const passwordvalidity = document.querySelector('.check-valid-pass')
let validemail=false
let validname=false
let validpass = false

function checkemailvalidity(){
    if(useremail.value){
        if(useremail.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            emailvalidity.innerHTML='Email format is correct'
            emailvalidity.classList.remove('invalid')
            emailvalidity.classList.add('valid')
            validemail = true
        }else{
            emailvalidity.innerHTML = 'Email format is incorrect'
            emailvalidity.classList.remove('valid')
            emailvalidity.classList.add('invalid')
            validemail = false
        }
    }
    else{
        emailvalidity.innerHTML=''
        emailvalidity.classList.remove('invalid','valid')
        validemail = false
    }
}

function checknamevalidity(){
    if(username.value){
        if(username.value.match(/[A-Za-z]{1,32}/)) {
            namevalidity.innerHTML='Name format is correct'
            namevalidity.classList.remove('invalid')
            namevalidity.classList.add('valid')
            validname = true
        }else{
            namevalidity.innerHTML = 'Name format is incorrect'
            namevalidity.classList.remove('valid')
            namevalidity.classList.add('invalid')
            validname = false
        }
    }
    else{
        namevalidity.innerHTML=''
        namevalidity.classList.remove('invalid','valid')
        validname = false
    }
}

function checkpassvalidity(){
    if(userpass.value){
        if(userpass.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$/)) {
            passwordvalidity.innerHTML='Password format is correct'
            passwordvalidity.classList.remove('invalid')
            passwordvalidity.classList.add('valid')
            validpass = true
        }else{
            passwordvalidity.innerHTML = 'Password must contain atleast text & numbers'
            passwordvalidity.classList.remove('valid')
            passwordvalidity.classList.add('invalid')
            validpass = false
        }
    }
    else{
        passwordvalidity.innerHTML=''
        passwordvalidity.classList.remove('invalid','valid')
        validpass = false
    }
}

setInterval(()=>{
    checkemailvalidity()
    checknamevalidity()
    checkpassvalidity()
    if(validemail && validname && validpass){
        document.getElementById('submit-user-info').style.display='flex'
    }else{
        document.getElementById('submit-user-info').style.display='none'
    }
},500)

