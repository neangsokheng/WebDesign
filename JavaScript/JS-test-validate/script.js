const name=document.getElementById('name')
const pass=document.getElementById('password')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=>{
	
	let messages=[]
	if(name.value===''||name.value==null){
		messages.puch('Name is required')
	}
	
	if(pass.value.length <=6){
		messages.puch('Password must be loger than 6 Characters')
	}
	if(pass.value.length >=20){
		messages.puch('Password must be loger than 20 Characters')
	}
	if(messages.length>0){
		e.preventDefault()
		errorElement.innerText=messages.join(', ')
	}
	
}) 

