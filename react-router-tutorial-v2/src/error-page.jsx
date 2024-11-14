import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Shiet...</h1>
      <o>Some danged unexpected error came n' occured n' shit!</o>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}