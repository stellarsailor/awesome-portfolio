import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Project (){

    let { title } = useParams()

    return (
        <div>
            {title}
        </div>
    )
}