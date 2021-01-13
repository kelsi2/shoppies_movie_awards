export default function MaxNominationsAlert(props) {
  return (
    // Banner message to display if 5 movies nominated
    props.nominated.length === 5 ?
        <>
          <div className="banner">
            <h1>Thank you!</h1>
            <h2>You've nominated 5 movies.</h2>
            <h3>If you'd like to add something different, please remove a nomination.</h3>
          </div>
        </>
        :
        null
  )
}