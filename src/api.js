export async function requestApi(searchTerm) {
  const url = `http://localhost:4000/artists?name_like=${searchTerm}`
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log(error)
    return []
  }
}
