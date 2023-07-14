import {Link } from 'react-router-dom'
export function Home(){
    return(
        <div className="home center">
            <Link to="/log">
              <img src="https://images.vexels.com/media/users/3/127559/isolated/preview/cd5ebd52d4a9292b154a2b46aaab72f9-icone-plano-de-odontologia.png" alt="Minha logo" />
            </Link>

        </div>
      
    )
}