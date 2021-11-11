import './App.css';
import {useState} from 'react'
import {Dropdown} from 'react'

function App() {
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
    club: "",
    program: "",
    level: "",
    qualified: 'false'
  })

  const handleChange = (e) => {
    // console.log('val', e.target.name)
    if(e.target.name === 'dog'){
      setMode(prev => ({...prev, dog: 'true'}))
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

  // console.log("value", value)
    const result = [];
    if(value.club === 'CWAGS' && value.program === 'Scent' && value.level === 'Level 1' ) {
      if(! value.qualified) {
        result.push("Result")
      } else {
        result.push('Q Result')
        if(result.length > 2) {         
          result.push('CW-SP Result')
        }        
      }
    }
    console.log("Result:", result)
}
  return (
    <div className="App mt-5">
      <form onSubmit={handleSubmit}>
      <select class="form-select" name="dog"  onChange={handleChange} aria-label="Default select example">
        <option selected>Dog</option>
        <option value="Kooper">Kooper</option>
      </select>
      { mode.dog === 'true'  &&       
        <select  name="club"  onChange={handleChange} >
        <option selected>Organization</option>
        <option value="CWAGS">CWAGS</option>
        </select>    
      }
      { mode.club === 'true' &&       
        <select class="form-select" name="program"  onChange={handleChange} aria-label="Default select example">
          <option selected>Program</option>
          <option value="Scent">Scent</option>
        </select>    
      }
      { mode.program === 'true' &&       
        <select class="form-select" name="level"  onChange={handleChange} aria-label="Default select example">
          <option selected>Level</option>
          <option value="Level 1">Level 1</option>
        </select>    
      }
      { mode.level === 'true' &&   
      <div>

        <input type='text' name ='judge' placeholder="Judge" onChange={handleChange}/>
        <input type='date' name='date' onChange={handleChange}/>
        <input type='number' name='time' placeholder="Time" onChange={handleChange}/>
        <input type="checkbox" name="qualified" value="Qualified" onChange={handleChange} />

        <div class="mb-3">
          <input type="text" class="form-control" name='scent' placeholder="scents" />
        </div>
        <div class="mb-3">
          <textarea class="form-control" name='input1' rows="3">What did you do well ?*</textarea>
        </div>

        <div class="mb-3">
          <textarea class="form-control" name='input2' rows="3">What did you improve on ?*</textarea>
        </div>
        <button type="submit" class="btn btn-primary" name='save'>Save</button>
     </div>
     }
    </form> 
  
    </div>
  );
}

export default App;
