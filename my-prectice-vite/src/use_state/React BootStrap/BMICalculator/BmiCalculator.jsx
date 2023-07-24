import React, { useState } from 'react'
import "./BMi.css"
export default function BmiCalculator() {
   let [age,setAge] = useState('')
   let [gender,setGender] = useState('femal')
   let [height,setHeight] = useState('')
   let [weight, setWeight] = useState('')
   let [resultBMI,setResultBMi] = useState(null)


     function handelOnClick(params) {
        if(age>0 && height>0 && weight>0 ){
            let HeightInMEters = height/100
            let bmi = (weight/(HeightInMEters * HeightInMEters)).toFixed(2)

            // Adjust BMI based on gender (using average male and female BMIs)

            let adjustBMI = bmi
            if(gender ==='female'){
                adjustBMI=(parseFloat(bmi)-0.5).toFixed(2)

            }else if(gender ==='male'){
                adjustBMI=(parseFloat(bmi)+0.5).toFixed(2)
        }
        setResultBMi(adjustBMI)
        }
        
     }
     function handelAge(e) {
        setAge(e.target.value)
        
     }
     function handelGender(e) {
        setGender(e.target.value)
        
     }
     function setOnHight(e) {
        setHeight(e.target.value)
        
     }
     function setOnWeight(e) {
        setWeight(e.target.value)
        
     }



  return (
    <div className='container'>
    <h1>Welcome TO BMI Calculator</h1>
    <div>
    <label htmlFor="age">Age</label>
    <input type="number" name="number" id="number" value={age} onChange={handelAge} />
    
    </div>
    <div>
        <label htmlFor="radio">Gender:</label>
        <select name="gender" id="gender" value={gender} onChange={handelGender}>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    </div>
    <div>
    <label htmlFor="age">Height (cm) :</label>
    <input type="number" name="number" id="number" onChange={setOnHight} />

    </div>
    <div>
    <label htmlFor="age">Weight (kg) :</label>
    <input type="number" name="number" id="number" onChange={setOnWeight} />

    </div>
    <button onClick={()=>{handelOnClick()}}>Calculator BMI</button>
    
    {resultBMI && <p>Your BMI :{resultBMI}</p>}
    </div>
  )
}
