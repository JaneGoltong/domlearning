const main = document.createElement('div')
main.id = "main"
main.className = "main"
document.body.appendChild(main)

//hearder

const navbar = document.createElement('header')
document.getElementById('main').appendChild(navbar)

const navlist = document.createElement('nav');
document.querySelector('header').appendChild(navlist)

const list = document.createElement('ul')
list.id = 'ul'
list.className = 'container'
list.classList.add('flex', 'm-auto', 'p-5', 'gap-10', 'justify-center', 'text-blue-700','md:gap-20')
document.querySelector('nav').appendChild(list)


const listItems = document.createElement('li')
listItems.innerText = 'Home'
listItems.id = 'home'
listItems.className = 'home'
listItems.classList.add('hover:text-blue-900')
document.querySelector('ul').appendChild(listItems)

const listItems2 = document.createElement('li')
listItems2.innerText = 'About'
listItems2.id = 'about'
listItems2.className = 'about'
listItems2.classList.add('hover:text-blue-900')
document.querySelector('ul').appendChild(listItems2)

const listItems3 = document.createElement('li')
listItems3.innerText = 'Home'
listItems3.id = 'home'
listItems3.className = 'home'
listItems3.classList.add('hover:text-blue-900')
document.querySelector('ul').appendChild(listItems3)

const mainSection = document.createElement('section')
mainSection.id = 'homeSection'
document.getElementById('main').appendChild(mainSection)

const homeContainer = document.createElement('div')
homeContainer.id = 'homeContainer'
document.getElementById('homeSection').appendChild(homeContainer)

const regForm = document.createElement('form')
regForm.id = 'registerForm'
document.getElementById('homeContainer').appendChild(regForm)

const input1 = document.createElement('div')
input1.id = 'input1'
input1.classList.add( 'flex','flex-col','mx-10', 'md:mx-20')
document.getElementById('registerForm').appendChild(input1)

const labelName = document.createElement('label')
labelName.id = 'name'
labelName.innerText = 'FullName'
labelName.value = 'FullName' 
document.getElementById('input1').appendChild(labelName)

const inputName = document.createElement('input')
inputName.id = 'iName'
inputName.type = 'text'
inputName.placeholder='Fullname'
inputName.classList.add('border-2','border-blue-700',)
document.getElementById('input1').appendChild(inputName)

//input field2

const input2= document.createElement('div')
input2.id = 'input2'
input2.classList.add( 'flex','flex-col','mx-10','md:mx-20')
document.getElementById('registerForm').appendChild(input2)

const labelName2 = document.createElement('label')
labelName2.id = 'name'
labelName2.innerText = 'Email'
labelName2.value = 'email' 
document.getElementById('input2').appendChild(labelName2)

const inputName2 = document.createElement('input')
inputName2.id = 'iName'
inputName2.type = 'email'
inputName2.placeholder='jane@gmail.com'
inputName2.classList.add('border-2','border-blue-700',)
document.getElementById('input2').appendChild(inputName2)

//input field 3

const input3= document.createElement('div')
input3.id = 'input3'
input3.classList.add( 'flex','flex-col','mx-10','md:mx-20')
document.getElementById('registerForm').appendChild(input3)

const labelName3 = document.createElement('label')
labelName3.id = 'password'
labelName3.innerText = 'Password'
labelName3.value = 'Password' 
document.getElementById('input2').appendChild(labelName3)

const inputName3 = document.createElement('input')
inputName3.id = 'ipassword'
inputName3.type = 'password'
inputName3.placeholder='Jenny222.!'
inputName3.classList.add('border-2','border-blue-700',)
document.getElementById('input2').appendChild(inputName3)

//field 4

const input4= document.createElement('div')
input4.id = 'input4'
input4.classList.add( 'flex','flex-col','mx-10','md:mx-20')
document.getElementById('registerForm').appendChild(input4)

const labelName4 = document.createElement('label')
labelName4.id = 'gender'
labelName4.innerText = 'gender'
labelName4.value = 'gender' 
document.getElementById('input2').appendChild(labelName4)

const inputRad= document.createElement('div')
document.getElementById('registerForm').appendChild(inputRad)

const inputRadio = document.createElement('input')
inputRadio.id = 'inputRadio1'
inputRadio.value = 'gender'
inputRadio.type = 'radio'
inputRadio.classList.add('border-2','border-blue-700',)
document.getElementById('inputRad').appendChild(inputRadio)

const inputRadio2 = document.createElement('input')
inputRadio2.id = 'inputRadio2'
inputRadio2.name = 'gender'
inputRadio2.value = 'male'
inputRadio2.type = 'radio'
inputRadio2.classList.add('border-2','border-blue-700',)
document.getElementById('inputRad').appendChild(inputRadio2)

const label1 = document.createElement('label');
label1.htmlForsn = 'inputRadio1';
label1.innerText = 'Male';
document.getElementById('inputRad').appendChild(label1);

const label2 = document.createElement('label');
label2.htmlFor = 'inputRadio2';
label2.innerText = 'Female';
document.getElementById('inputRad').appendChild(label2);


document.addEventListener("DOMContentLoaded", () =>{

})