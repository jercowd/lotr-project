import React, { useState } from 'react'
import styles from './movies.module.css'

export default function Characters(props) {
  const [char, setChar] = useState('')
  const { data } = props
  const mappedList = data.docs.filter(element => {
    if (char == '') {
      return true
    }
    if (element['name'].toLowerCase().includes(char.toLowerCase())) {
      return true
    }
    return false
  })

  return (
    <div className={styles.movieDashboard}>
      <input className = {styles.characterSelect} value={char} 
      placeholder='Character Name' onChange={(e) => {setChar(e.target.value)}}></input>
      {mappedList.map((char, index) => {
        const keys = Object.keys(char).filter(element => {
          if (element == 'name' || element == '_id') {
            return false
          }
          if (!char[element]) {
            return false
          }
          return true
        })

        return (
          <div key={index} className={styles.information}>
            <h1>{char.name}</h1>
            {keys.map(title => {
              return (
              <div key={title} className={styles.keyVal}>
                <p>{title}: {char[title]}</p>
              </div>)
            })}
          </div>
        )
      })}
    </div>
  )
}