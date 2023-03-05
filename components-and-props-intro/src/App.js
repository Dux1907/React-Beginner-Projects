import styles from './index.css'
import Img from './Img'
const style = {
  width: '18rem',
  display: 'inline-block',
  margin:'1rem',
  border : '1px solid black',
  padding: '5px',
  height:'37rem'
}
const linkstyle = {
  textDecoration : 'none',
  display: 'block',
 margin:'auto'
}
const center = {
  textAlign:'center',
  margin:'5px'
}
function Card(props){
  return (
    <>
    <div className="card" style = {style}>
    <Img 
      imgsrc = {props.imgsrc} 
    />
  <div className="card-body">
    <h2 style = {center} className="card-title">{props.title}</h2>
    <p style = {center} className="card-text">{props.content}</p>
    <a style = {linkstyle} href={props.link} target = '_kartik' className="btn btn-primary">Watch now</a>
  </div>
      </div>
      </>
  )
}

export default Card;
export {center}