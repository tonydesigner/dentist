import { Link } from "react-router-dom"
export function Menu(){
    const menu = 
    [
        {id:0,title: 'Agendamentos', link:'/agenda'},
        {id:1,title: 'Especialidades', link:'/especial'},
    ]
    return(
        <div className="menu">
            <div className="tpTitle center">
                <h1>Menu</h1>
            </div>
            <div className="baseMenu margin">
                {
                    menu.map((i)=>
                        <Link key={i.id} className="link" to={i.link}>
                            <div className="box center">
                                {i.title}
                            </div>
                        </Link>
                        
                        )
                }
            </div>
           
        </div>
        
    )
}