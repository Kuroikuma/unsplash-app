const apiUrl = 'https://powerful-forest-65007.herokuapp.com/image'

export async function postImage(image) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(image),
  })
  return response
    .json()
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))
}

export const getImage = () => {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response])
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}
export const deleteImage = (id) => {
  const baseUrl = `https://powerful-forest-65007.herokuapp.com/image/${id}`
  fetch(baseUrl, {
    method: 'DELETE',
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}
export const getImageLabel = (label) => {
  return fetch(`${apiUrl}/label/${label}`)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response])
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}
