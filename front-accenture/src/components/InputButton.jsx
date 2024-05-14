import React from 'react'

export const InputButton = (props) => {
    return (
        <div>
            <div className={props.divClassName}>
                <input className={props.classInputName} onClick={props.onClick} checked={props.checked} id={props.id} name={props.name} type='radio' />
                <label className={props.kkk} htmlFor={props.htmlFor}>{props.label}</label>
            </div>
        </div>
    )
}
