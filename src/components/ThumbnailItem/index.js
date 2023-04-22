// Write your code here.
import './index.css'

export default function ThumbnailItem(props) {
  const {details, passed, isActive} = props
  const {imageUrl, id} = details
  const style = isActive ? '' : 'active'
  function clicked() {
    passed(id)
  }
  return (
    <li>
      <button onClick={clicked}>
        <img className={style} src={imageUrl} alt="kid" />
      </button>
    </li>
  )
}
