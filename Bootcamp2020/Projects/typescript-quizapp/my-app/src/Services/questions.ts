import { questionType,quiz } from "../Types/quiztypes";

export const fetchQuestions = async(questions: number, level: string):Promise<questionType[]>  => {
   
   const shuffleArray = (array: any[]) =>{
       [...array].sort(()=> Math.random() - 0.5)
   }
   
    try {
        console.log("in fetchquestions")
        // console.log(questions)
        console.log(level)
        const res = await fetch(`https://opentdb.com/api.php?amount=${questions}&category=22&difficulty=${level}&type=multiple`);
        let   {results}= await  res.json();
              
        console.log(results +"This is data in questions")
        const quiz = results.map((questionItem:quiz,index:number) =>{
            return {
                question : questionItem.question,
                answer : questionItem.correct_answer,
                options : (questionItem.incorrect_answers.concat(questionItem.correct_answer)),
            }
        })
        return quiz
    } catch (error) {
        return []
    }
}