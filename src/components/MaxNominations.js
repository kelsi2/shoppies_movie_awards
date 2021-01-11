export default function MaxNominations(props) {
  return (
    props.nominated.length === 5 ?
        <>
          <h1>You've nominated 5 movies!</h1>
          <h3>If you'd like to add more, please remove a nomination.</h3>
        </>
        :
        null
  )
}