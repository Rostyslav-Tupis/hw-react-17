import React from 'react'; 
import './style_of_block_contact.css'

function blockContact(props){
    return(
        <div className='card_container'>
            <div className='info'>
                <h3 className='info_of_contact'>{props.info.firstName} {props.info.lastName}</h3>
                <p className='info_number'>{props.info.phone}</p>
            </div>
        </div>
    )
}

export default blockContact