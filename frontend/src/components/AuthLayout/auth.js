const logar = async (email, senha) => {
    console.log("CHAMOU LOGIN")
    const url = import.meta.env.VITE_API_URL
    fetch(`${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email,
            senha
        })
    })
    .then(async (res) => {
        const data = await res.json()

        if (!res.ok) {
            throw new Error(data.message)
        }

        return data
    })
    .then((data) => {
        localStorage.setItem("token" , data.token)
    })
    .catch(err => console.log(err))
}

const cadastrar = async(email, senha) => {
    console.log("CHAMOU CADASTRO")
    const url = import.meta.env.VITE_API_URL
    fetch(`${url}/cadastro`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email,
            senha
        })
    })
    .then(res => res.json())
    .then(response => {
        console.log(response.message)
    })
    .catch(err => console.log(err))
}

export {logar, cadastrar}