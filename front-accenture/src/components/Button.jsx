import React from 'react'
import styles from './styles/Button.css'
export const Button = (props) => {
  return (
    <div className={props.divClassName}>
        <label className={props.kkk} htmlFor={props.htmlFor}>{props.label}</label>
        <input className={props.classInputName} onClick={props.onClick} onBlur={props.onBlur} checked={props.checked} id={props.id} name={props.name} type={props.type} value={props.value} placeholder={props.placeholder} />
    </div>
  )
}
