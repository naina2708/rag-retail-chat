const API_URL = "http://127.0.0.1:8000"

async function uploadPDF(){

const fileInput = document.getElementById("pdfFile")
const status = document.getElementById("uploadStatus")

const file = fileInput.files[0]

if(!file){
status.innerText="Select a file first"
return
}

const formData = new FormData()
formData.append("file",file)

status.innerText="Uploading..."

const response = await fetch(`${API_URL}/upload`,{
method:"POST",
body:formData
})

const data = await response.json()

status.innerText=data.message
}

async function askQuestion(){

const input=document.getElementById("questionInput")
const chat=document.getElementById("chatContainer")

const question=input.value

if(!question) return

addMessage(question,"user")

input.value=""

addMessage("Thinking...","bot")

const response=await fetch(`${API_URL}/ask`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
question:question
})
})

const data=await response.json()

chat.lastChild.remove()

addMessage(data.answer,"bot")
}

function addMessage(text,type){

const chat=document.getElementById("chatContainer")

const msg=document.createElement("div")

msg.classList.add("message",type)

msg.innerText=text

chat.appendChild(msg)

chat.scrollTop=chat.scrollHeight
}