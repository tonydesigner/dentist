import { useState } from "react"
import { Marcado } from "./Marcado"

export function Agenda(){
    const especial =
    [
        {title:'Clínico Geral'},
        {title:'Odontopediatria'},
        {title:'Ortodontista'},
        {title:'Odontogeriatria'},
    ]
    const [nome, setNome] =useState()
    const [espe, setEspe] =useState()
    const [dia, setDia] =useState()
    const [hora, setHora] =useState()


    const acao = (e)=>{
        e.preventDefault()
        let form = document.querySelector('form')
        form.style.display = 'none'
        let item = document.querySelector('.marcado')
        item.style.display = 'block'
    }
    return(
        <>
  
            <div className="agenda">
                <div className="tpTitle center">
                    <h1>AGENDAMENTO</h1>
                </div>
                <div className="baseAgenda">
                    <h3></h3>
                <form onSubmit={acao}>
                        <input type="text" placeholder="Nome" value={nome} onChange = {(e)=>setNome(e.target.value)} />
                        <select value={espe} onChange={(e)=>setEspe(e.target.value)}>
                            <option>Especialidade</option>
                            {
                                especial.map(i=>
                                    <option>{i.title}</option>
                                    )
                            }
                        </select>
                        <input type="date" placeholder="Data" value={dia} onChange={(e)=>setDia(e.target.value)} />
                        <input type="text" placeholder="Hora" value={hora} onChange={(e)=>setHora(e.target.value)} />
                        <button>Marcar</button>
                    </form>
                    <div className="marcado">
                        <table>
                            <tr>
                                <td>{'Nome: '+ nome }</td>
                            </tr>
                            <tr>
                                <td>{'Especialidade: '+ espe }</td>
                            </tr>
                            <tr>
                                <td>{'Data: '+ dia}</td>
                            </tr>
                            <tr>
                                <td>{'Data: '+ hora + 'h'}</td>
                            </tr>
                        </table>
                       
                    </div>
                </div>
               
            </div>
            
        </>
        
    )
}