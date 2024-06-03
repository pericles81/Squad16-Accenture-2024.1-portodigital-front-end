import React from 'react'
import googleIcon from '../assets/google-img.svg'

export const Card = (props) => {
    return (
        <div className={props.divMainCard}>
            <div className={props.divImg}>
                <img className={props.img} src='https://339028l.ha.azioncdn.net/img/2023/07/produto/29308/abajur-murano-cristal-1chatelet-garnet-ambientada-sottile-casa-1.jpg' />
            </div>
            <div className={props.divData}>
                <h2>{props.h2}</h2>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
            </div>
            
        </div>
    )
}
