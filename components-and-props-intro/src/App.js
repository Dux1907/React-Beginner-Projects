import styles from './index.css'

const style = {
  width: '18rem',
  display: 'inline-block',
  margin:'1rem',
  border : '1px solid black',
  padding: '5px',
  height:'27rem'
}
const linkstyle = {
  textDecoration : 'none',
  display: 'block',
 margin:'auto'
}
const imgstyle = {
  width:'100%',
  height:'60%',
}
const center = {
  textAlign:'center',
  margin:'5px'
}
function Card(props){
  return (
    <>
    <div className="card" style = {style}>
  <img style = {imgstyle} src={props.imgsrc} className="card-img-top" alt="..." />
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