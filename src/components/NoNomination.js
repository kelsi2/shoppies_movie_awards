export default function NoNomination(props) {
  if (props.nominated.length < 0) {
    return (
      <>
        <h3>Nominate up to 5 of your favorite movies for the Shoppies!</h3>
        <h4>Get started by searching by movie title at the top.</h4>
      </>
    )
  }
}