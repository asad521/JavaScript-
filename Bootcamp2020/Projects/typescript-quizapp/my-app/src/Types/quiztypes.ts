import React from "react"

export  type  quiz = {
category: string,
correct_answer: string,
difficulty: string, 
incorrect_answers: string[]
question: string
type: string
}
export  type  questionType = {
answer: string,
options: string[], 
question: string
}

export type questionProps = {
    options: string[], 
question: string,
handleSubmit:(e:React.FormEvent<EventTarget>, selection:string)=>void,
}

