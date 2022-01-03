import React,{useState} from 'react'
import './../App.css';
import { questionProps } from '../Types/quiztypes';
export const QuestionCard:React.FC<any> = ({question,option,handleSubmit}) => {


    // console.log(question)
    // console.log(option)
    let [selection,setSelection] =useState();
    let [score,setScore]=useState(0);

    const handleSelection = (e:any) => {
        // console.log(selection+'this is selection')

        console.log(e.target.value+'this is selection')
        setSelection(e.target.value);

    }
    return (
    
        <div className="container">
            <h2>{question}</h2>
            <form onSubmit={e =>handleSubmit(e,selection)}>
                {option.map((option:string,index:number)=>{
                    return (
                        <label>
                            <div>
                            <input type="radio" name="option" value={option} 
                            required 
                            onChange={handleSelection} 
                            checked={selection===option}/>

                            {option}
                            </div>
                        </label>
                    )
                })}
                            <input type="submit" value="submit" />

            </form>

        </div>
    )
}

export default QuestionCard;