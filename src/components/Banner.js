import '../styles/Header.css';

export default function MaxNominationsAlert(props) {
  return (
    // Banner message to display if 5 movies nominated
    props.nominated.length === 5 ?
        <>
          <div className="banner">
            <h1>Nominations submitted successfully. Thank you!</h1>
            <h4>You've nominated 5 movies. If you'd like to add something different, please remove a nomination.</h4>
          </div>
        </>
        :
        null
  )
}