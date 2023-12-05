import React, { useCallback, useEffect, useState } from "react";

function ProjectPassword3() {
  const [length, setlength] = useState(10);
  const [characterValue, setcharacterValue] = useState(false);
  const [NumberValue, setNumberFunction] = useState(false);
  const [passwordValue, setpasswordFunction] = useState(false);
  const passwordFunction = useCallback(()=>{
	    let str = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz" ;
        if (NumberValue) str += "1234567890" ;
		if (characterValue) str += "!@#$%^&*(){}[]'?/|~`" ;
		let pass = "";

		for (let index = 0; index < length; index++) {
			pass += str.charAt(Math.random() * str.length );
		}
		setpasswordFunction(pass);
  }, [length, characterValue, NumberValue, ])

useEffect(()=>{
	passwordFunction();
}, [length, characterValue, NumberValue]);

  return (
    <div className="text-xl font-bold bg-black w-[100vw] flex justify-center  h-[100vh]">
      <div>
        <div className=" bg-gray-800 py-5 my-20 text-center w-[60vw] h-[200px]">
          <div>
            <h1 className="text-white">PASSWORD GENERATOR </h1>
            <input
              type="text"
              placeholder="Your Password ? "
			  id="inputPassword"
              readOnly
			  value={passwordValue}
              className="p-2 m-r-0 w-1/2 my-4 rounded-l-lg"/>{" "}
            <button className="bg-blue-800 p-2.5 rounded-r-lg m-x-0" onClick={()=>{
              let valueElement = document.getElementById("inputPassword");
			  valueElement.select();
			  document.execCommand('copy');
			}}>
              Copy
            </button>
          </div>
          <div className="align-middle space-x-1">
            
			<input type="range"  min={0} max={50} value={length} onChange={(e)=>{setlength(e.target.value)}} className="cursor-pointer align-middle"/> <label className="text-red-800 align-middle">Langth : {length}</label>
			<input type="checkbox" className="accent-blue-800 text-red-800 align-middle" defaultChecked={characterValue} onChange={()=>{ setcharacterValue(!characterValue) ; }} /> <label className="text-red-800 align-middle" >Character </label>

			<input type="checkbox" className="accent-blue-800 w-xl text-red-800 align-middle"  defaultChecked={NumberValue} onChange={()=>{ setNumberFunction(!NumberValue) ; }} /> <label className="text-red-800 align-middle" 
			>Number </label>
          </div>	
        </div>
      </div>

	  {/* <div>
		<h1 className="text-white font-2 bg-green-700 rounded-xl p-2 absolute mt-20 ml-20" id="copyId">Copy Value ?</h1>
	  </div> */}
    </div>
  );
}

export default ProjectPassword3;
