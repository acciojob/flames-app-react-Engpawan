import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    const[Name1, setName1] = useState("")
    const[Name2, setName2] = useState("")
    const[show, setshow] = useState("")
    let arr = ["Siblings","Friends", "Love", "Affection", "Marriage", "Enemy"]


    return(
        <div>
            <input onChange={(e) =>{
                setName1(e.target.value)
            }}value={Name1} data-testid="input1" name="Name1"/>
            <input onChange={(e) =>{
                setName2(e.target.value)
            }} value={Name2}  data-testid="input2" name="Name2"/>
            <button onClick={() =>{
                let map = new Map()
            for(let i = 0; i < Name1.length; i++)
            {
                if(map.has(Name1[i]))
                {
                    map.set(Name1[i], map.get(Name1[i]) + 1)
                }
                else
                {
                    map.set(Name1[i], 1)
                }
            }

            for(let i = 0; i<Name2.length; i++)
            {
                if(map.has(Name2[i])){
                map.set(Name2[i], map.get(Name2[i])-1)
                  if(map.get(Name2[i]) == 0)
                    {
                        map.delete(Name2[i])
                    }
                
                else
                {
                    map.set(Name2[i], 1)
                }
            }
            }
                let temp = map.values()
                let sum = 0

                for(let items of temp)
                {
                    sum+=items
                }

                setshow(arr[sum%6])

                if(sum==0)
                {
                    setshow("Please Enter valid input")
                    return
                }
            
            }} data-testid="calculate_relationship" name="calculate_relationship">Calculate Relationship Future</button>
            <button onClick={() =>{
                setName1("")
                setName2("")
                setshow("")
            }} data-testid="clear" name="clear">Clear</button>

            <h3 data-testid="answer">{show}</h3>
        </div>
    )
}

export default App



