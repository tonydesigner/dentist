import { useState } from "react"

export function Login(){
    const dados = 
    [
        {name: 'Antonio', pass:'123'},
        {name: 'Gisele', pass:'456'},
        {name: 'Carla', pass:'789'},
        {name: 'Tete', pass:'012'},
    ]
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()
    const acao = (e)=>{
        e.preventDefault()
        dados.map((i)=>{
            if(login == i.name && senha == i.pass){
                window.location.href = "/menu"           
            }
        })
        
    }
    return(
        <div className="log center">
            <form onSubmit={acao}>
                <img src="https://images.vexels.com/media/users/3/127559/isolated/preview/cd5ebd52d4a9292b154a2b46aaab72f9-icone-plano-de-odontologia.png" alt="Minha logo" />
                <input type="text" placeholder="Login" value={login} onChange = {(e)=>setLogin(e.target.value)} />
                <input type="password"  placeholder="Senha"  value={senha} onChange = {(e)=>setSenha(e.target.value)} />
                <button >Logar</button>
            </form>

        </div>
    )
}