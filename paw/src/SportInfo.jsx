
import {useState} from 'react'
import {Dropdown} from 'react'
import { Link } from 'react-router-dom'
import Results from './Reulsts'

function SportInfo() {
  const [mode, setMode] = useState({
    dog: 'false',
    club: 'false',
    program: 'false',
    level: 'false',
    scent: 'false',
    judge: 'false',
    date: 'false',
    time: 'false',
    qualified: 'false',
    input1: 'false',
    input2: 'false',
    save: 'false',
    result: 'false'
  })

  const [value, setValue] = useState({
    name: "",
    club: "",
    program: "",
    level: "",
    qualified: 'false',
    result: ""
  })

  const handleChange = (e) => {
    // console.log('val', e.target.name)
    if(e.target.name === 'dog'){
      setMode(prev => ({...prev, dog: 'true'}))
      setValue(prev => ({...prev, name: e.target.value}))
    } 
    if(e.target.name === 'club'){
      setMode(prev => ({...prev, club: 'true'}))
      setValue(prev => ({...prev, club: e.target.value}))
    }
    if(e.target.name === 'program'){
      setMode(prev => ({...prev, program: 'true'}))
      setValue(prev => ({...prev, program: e.target.value}))
    }
    if(e.target.name === 'level'){
      setValue(prev => ({...prev, level: e.target.value}))
      setMode(prev => ({...prev, level: 'true'}))
      setMode(prev => ({...prev, judge: 'true'}))
      setMode(prev => ({...prev, date: 'true'}))
      setMode(prev => ({...prev, time: 'true'}))
      setMode(prev => ({...prev, qualified: 'true'}))
      setMode(prev => ({...prev, scent: 'true'}))
      setMode(prev => ({...prev, input1: 'true'}))
      setMode(prev => ({...prev, input2: 'true'}))
      setMode(prev => ({...prev, save: 'true'}))
    }
    if(e.target.name === 'qualified'){
      // console.log("isChecked", e.target.checked)
      setValue(prev => ({...prev, qualified: e.target.checked}))
    }
  } 
   
const handleSubmit = (e) => {
  e.preventDefault()

   console.log("value", value)
    const result = [];
    if(value.club === 'CWAGS' && value.program === 'Scent' && value.level === 'Level 1' ) {
      if(value.qualified === 'false') {
        result.push("Result")
      } else {
        result.push('Q Result')
        if(result.length > 2) {         
          result.push('CW-SP Result')
        }        
      }
    }
    setValue(prev => ({...prev, result: result}))
    setMode(prev => ({...prev, result: 'true'}))
    console.log("Result:", value)
}
  return (
    <div className="App container mt-5">
      <form class="row g-1" onSubmit={handleSubmit}>
       <div class="col-md-6"> 
      <div class="col-md-9">
      <select class="form-select mb-3" name="dog"  onChange={handleChange} aria-label="Default select example">
        <option selected>Dog</option>
        <option value="Kooper">Kooper</option>
      </select>
      </div>
      
      { mode.dog === 'true'  &&   
      <div class="col-md-9">    
        <select class="form-control mb-3"  name="club"  onChange={handleChange} >
        <option selected>Organization</option>
        <option value="CWAGS">CWAGS</option>
        </select>  
      </div>  
      }
      
      { mode.club === 'true' &&    
      <div class="col-md-9">
        <select class="form-select mb-3" name="program"  onChange={handleChange} aria-label="Default select example">
          <option selected>Program</option>
          <option value="Scent">Scent</option>
        </select>  
        </div>     
      }
      
      { mode.program === 'true' &&    
        <div class="col-md-9">
          <select class="form-select mb-3" name="level"  onChange={handleChange} aria-label="Default select example">
            <option selected>Level</option>
            <option value="Level 1">Level 1</option>
          </select>  
        </div>     
      }
      { mode.level === 'true' &&   
        <div>
          <div class="col-md-9">
          <input class="form-control mb-3" type='text' name ='judge' placeholder="Judge" onChange={handleChange}/>
          </div>
          <div class="col-md-9">
            <input class="form-control mb-3" type='date' name='date' onChange={handleChange}/>
          </div>
          <div class="col-md-9">
            <input class="form-control mb-3" type='number' name='time' placeholder="Time" onChange={handleChange}/>
          </div>
          <div class="col-md-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="qualified" value="Qualified" onChange={handleChange} id="gridCheck"/>
              <label class="form-check-label " for="gridCheck">
                Qualified
              </label>
          </div>
        </div>
      </div>
      } 
    </div>
    <div class="col-md-6">
      { mode.level === 'true' &&   
         <div> 
          <div class="col-md-6 mb-3">
            <input type="text" class="form-control" name='scent' placeholder="scents" />
          </div>
          <div class="col-md-6 mb-3">
            <textarea class="form-control" name='input1' rows="3">What did you do well ?*</textarea>
          </div>

          <div class="col-md-6 mb-3">
            <textarea class="form-control" name='input2' rows="3">What did you improve on ?*</textarea>
          </div>
          <div class="col-md-6 mb-3">
          {/* <Link to={`/Results/${value.result}`} > */}
            <button class="form-control" type="submit" class="btn btn-primary" name='save'>Save</button>
          {/* </Link> */}
          </div>
      </div>
     }
     </div>
    </form> 
  
    { mode.result === 'true' && <Results result={value} />}
  
    </div>
  );
}

export default SportInfo;
