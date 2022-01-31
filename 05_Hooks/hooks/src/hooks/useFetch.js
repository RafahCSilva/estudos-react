import { useEffect, useState } from 'react'

export const useFetch = (url, method = 'get') => {
  const [ response, setResponse ] = useState({
    data: null,
    loading: true,
  })

  useEffect(function () {
    fetch(url, { method })
      .catch(err => console.error(err))
      .then(resp => resp.json())
      .then(json => setResponse({
        data: json,
        loading: false,
      }))
      .catch(err => console.error(err))
  }, [ url, method ])

  return response
}
