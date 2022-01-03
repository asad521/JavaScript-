import React, {useEffect, useState} from 'react';
import { questionType } from './Types/quiztypes';
import logo from './logo.svg';
import './App.css';
import { fetchQuestions } from './Services/questions';
import QuestionCard from './Component/QuestionCard';
function App() {

  let [quiz,setQuiz] = useState<questionType[]>([]);  
  let [state,setState] = useState(0);  
  let [score,setScore] = useState(0);
  useEffect( () =>  {
    const call= async () => {
      console.log("called")
      const data:questionType[] = await fetchQuestions(5,'easy')
      setQuiz(data);

    }
    call();
    
  },[])
  console.log(quiz[state])

    const handleSubmit = (e:React.FormEvent<EventTarget>, selection:string) => {
      e.preventDefault();
      const currentQ:questionType = quiz[state];
      console.log(currentQ.answer +'current question')
      if(currentQ.answer===selection) {
        alert('your answer is correct')
        setScore(++score);
      } else {
        alert('your answer is wrong')
      }
      
      console.log(selection+'this is answer') 
      if(state !== quiz.length-1) {
        setState(++state);
      }  else {
        alert('Quiz completed !.Your total score is '+score+'out of 4')
        setScore(0);
        setState(0);
        
      }

    }
  if(!quiz.length) 
    return <h3>Loading</h3>
  return (
    <div className="App">
     quiz app typescript
     <QuestionCard 
    //  question={quiz[0].question}
     question={quiz[state].question}
     option={quiz[state].options}
     handleSubmit={handleSubmit }
     ></QuestionCard>
    </div>
  )
}

export default App;
