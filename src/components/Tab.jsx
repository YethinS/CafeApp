import React from 'react'
import Styles from './tab.module.scss'
import {useState} from 'react'

function Tab(props) {
  const [isSelected, setIsSelected] = useState(false)

  const selected = () => {
    //console.log('Clicked :',typeof props.name)
   props.onClick(props.name)
  }

  return (
    <div className={`${Styles.tabSection} ${props.isSelected ? Styles.selected : ""}`} onClick={() => selected()}>{props.name}</div>
  )
}

export default Tab