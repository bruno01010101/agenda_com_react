async function cadastro(email, senha){
    const url = import.meta.env.VITE_API_URL
    console.log(email, senha)
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
        console("Sucesso: ", data.message)
    })
    .catch((err) => {
        throw new Error(err.message)
    })
}


async function login(email, senha) {
    
}
export {cadastro, login}