import React from 'react'
import styles from './options.module.css'
export default function Options(props) {
  const {selection, setSelection} = props

  const questions = [
    'character',
    'movie',
    'book'
  ]

  console.log('SELECTION VALUE: ', selection)

  return (
    <div>
      {questions.map((question, index) => {
        return (
          <button onClick={setSelection(question)} className={`${styles.button} ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`} key={index}>{question}</button>
        )
      })}
    </div>
  )
}