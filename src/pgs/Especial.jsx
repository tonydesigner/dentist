export function Especial(){
    const especial = 
    [
        {nome:'Acupuntura'},
        {nome:' Bucomaxilo'},
        {nome:'Temporomandibular'},
        {nome:'Endodontia'},
        {nome:' Estomatologia'},
        {nome:'Harmonização orofacial'},
        {nome:'Homeopatia'},
        {nome:'Implantodontia'},
        {nome:'Odontogeriatria'},
    ]
    return(
        <div className="especial">
            
            <h1>Especialidades</h1>
        
            {
                especial.map(i=>
                        <p>{i.nome} </p>
                    )
            }

        </div>
    )
}