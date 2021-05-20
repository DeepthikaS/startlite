import React from 'react'
import Cl from './clientlogo'

class Client extends React.Component{
    render(){
        return(
            <section class="client-logo-area">
                <div class="container">
                    <div class="row">
                        <Cl source="https://preview.uideck.com/items/start/assets/images/client_logo_01.png"/>
                        <Cl source="https://preview.uideck.com/items/start/assets/images/client_logo_02.png"/>
                        <Cl source="https://preview.uideck.com/items/start/assets/images/client_logo_03.png"/>
                        <Cl source="https://preview.uideck.com/items/start/assets/images/client_logo_04.png"/>
                    </div> 
                </div> 
            </section>
        )
    }
}

export default Client