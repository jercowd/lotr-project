import React, {useState, useEffect } from 'react'

export default function useFetchData(selection) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiURL = 'https://the-one-api.dev/v2'
  const APITOKEN = import.meta.env.VITE_API_KEY
  let options = {
    headers: {
      'method': 'GET',
      'Authorization': `Bearer ${APITOKEN}`
    }
  }

    console.log(APITOKEN)

  useEffect(() => {
    if (!selection) {
      return
    }
    setLoading(true)
    async function fetchData () {
      const url = apiURL + '/' + selection
      try {

        const res = await fetch(url, options)
        const jsonData = await res.json()
        console.log('DATA: ', jsonData)
        setData(jsonData)
      } catch(err) {
          setError(error.message)
      } finally {
          setLoading(false)
      }
    }

    fetchData()
  }, [selection])

  return {data, error, loading}
}