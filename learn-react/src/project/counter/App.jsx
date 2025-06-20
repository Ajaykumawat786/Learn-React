import React,{useState} from "react"

function App(){

    const [count, setcount] = useState(0)
    function inc(){
        setcount(count +1)
        
    }

    function dec(){
        if(count > 0 ){
        setcount(count -1)
    }
}



    return(
        <div className="text-center uppercase ">
            <button onClick={inc} className="text-4xl bg-green-300 rounded-full uppercase text-red-600 mt-70 font-bold p-5 ">love you</button>
<span className="text-4xl p-5 border rounded-full text-green-500 font-bold mx-5 ">{count}</span>
<button onClick={dec} className="text-4xl p-5 uppercase font-bold bg-red-300 rounded-full">hate you</button>
        </div>
    )
}
export default App