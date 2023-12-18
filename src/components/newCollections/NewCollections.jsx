import React from 'react'
import "./newCollections.css"
import newCollections from "../../assets/new_collections.js"
import Item from '../item/Item.jsx'

function NewCollections() {
    return (
        <div className='new-collecions'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {
                    newCollections.map((item, index) => {
                        return <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections