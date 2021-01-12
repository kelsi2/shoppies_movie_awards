export default function MaxNominations(props) {
  return (
    // Banner message to display if 5 movies nominated
    props.nominated.length === 5 ?
        <>
          <h1>You've nominated 5 movies, thank you!</h1>
          <h3>If you'd like to add more, please remove a nomination.</h3>
        </>
        :
        null
  )
}