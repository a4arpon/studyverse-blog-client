export const dateFormat = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-GB')
  return formattedDate
}
