import React from 'react'

export default function PassWord() {
  return (
    <div>
    <div className="header">
        <h1>PassWord Generater</h1>
        <div className="PassWord">
            <h3>{PassWord}</h3>
            <button onClick={()=>{CreatePass()}}>Copy PassWord</button>
        </div>
    </div>
      <div className="Form-Group">
       <label htmlFor="password-strength">PassWord length</label>
       <input type="number"id='Pw length'name='password-strength' max={"26"} min={"8"} />
      </div>
      <div className="Form-Group">
       <label htmlFor="Uppercase-latters">Add UpperCase Latters</label>
       <input type="checkbox"id='uppercase-latters'name='uppercase-latters'  />
      </div>
      <div className="Form-Group">
       <label htmlFor="LowerCase-latters">Add Lower Latters</label>
       <input type="checkbox"id='LowerCase-latters'name='LowerCase-latters'  />
      </div>
      <div className="Form-Group">
       <label htmlFor="include-numbers">Include Numbers</label>
       <input type="checkbox"id='include-numbers'name='include-numbers'  />
      </div>
      <div className="Form-Group">
       <label htmlFor="include-symbols">Include Symbols</label>
       <input type="checkbox"id='include-symbols'name='include-symbols'  />

       <button onClick={()=>GeneratePassword()}>Generate PassWord</button>

       
      </div>




    </div>
  )
}
