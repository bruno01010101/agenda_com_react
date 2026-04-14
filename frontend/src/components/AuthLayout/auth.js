import axios from "axios"

async function cadastro(email, senha){
    const url = import.meta.env.VITE_API_URL
    fetch(`${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, senha})
    }).then(async (response) => {
        if(!response.ok){
            const dataErro = response.json()
            console.log(dataErro.message) 
        }
        return response.json()
    })
    .then((data) => {
        return { success: true, message: data.message }

    })
    .catch((err) => {
        throw new Error(err.message)
    })
}


async function login(email, senha) {
    const url = import.meta.env.VITE_API_URL
    try{
        const req = await axios.post(`${url}/login`,{
            email: email,
            senha: senha
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await req.data
        localStorage.setItem("token", data.token)
        return {success: false, message: data.message}
    }catch(err){
        throw new Error(err.message)
    }
}
export {cadastro, login}