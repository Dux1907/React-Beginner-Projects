function App() {
    const heading = {
    fontSize: '3rem',
    border: '2px solid black',
    padding: '20px',
    borderRadius:'30px'
}
  
  let d = new Date(2022,5,5,18).getHours();
  let output = {}
  if (d < 12 && d > 4) {
    output = {
      message: 'good morning!',
      color: 'gold'
    }
  }
  else if (d < 16 && d > 12) {
    output = {
      message: 'good afternoon!',
      color: 'orange'
    }
  }
  else if (d > 16 && d < 21) {
    output = {
      message: 'good evening!',
      color: 'green'
    }
  }
  else {
    output = {
      message: 'good night!',
      color: 'blue'
    }
  }
    return (
        <h2 style={heading}>Hi there,<span style={output}>{output.message}</span></h2>
    )
}

export default App;