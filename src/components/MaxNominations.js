export default function MaxNominations(props) {
  return (
    // Banner message to display if 5 movies nominated
    props.nominated.length === 5 ?
        <>
          <div className="banner">
            <h1 className="banner-text">You've nominated 5 movies, thank you!</h1>
            <h3 className="banner-text">If you'd like to add something different, please remove a nomination.</h3>
          </div>
        </>
        :
        null
  )
}