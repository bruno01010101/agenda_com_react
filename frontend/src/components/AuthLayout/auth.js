async function cadastro(email, senha){
    const url = import.meta.env.API_URL
    fetch(`${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, senha})
    }).then(async (response) => {     // o response convertido para json não tem mais o .ok
        if(!response.ok){
            const erroData = await response.json()
            throw new Error(erroData.message)
        }
        return response.json() // senão passar pelo erro, apenas vai retornar o response.json diretamente
    })
    .then((data) => {
        console("Sucesso: ", data.message)
    })
    .catch((err) => {
        throw new Error(err.message)
    })
}

export {cadastro}