

function Results(props) {
   const { result } = props
  return(
    <div class="container" style={{backgroundColor: 'lightcyan', height: '200px' }}>
      <div>
      <h3>{result.name}</h3><h5>{result.club}</h5><h5>{result.program} {result.level}</h5>
      </div>
      <div>
      {result.result}
      </div>
     
    </div>
  )
}

export default Results