
const imgstyle = {
    width:'100%',
    height:'60%',
  }
  
  function Img(props){
    return (
      <img style = {imgstyle} src={props.imgsrc} className="card-img-top" alt="..." />
    )
  }
  export default Img