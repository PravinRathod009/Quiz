const questions = [
//   {
//     topic: "1",
//     question: "How many key word in java?",
//     possibleAnswers: ["34", "50", "62"],
//     correctAnswer: "50",
//     back:""
//   },
//   {
//     topic: "2",
//     question: "Number of primitive data types in java are?",
//     possibleAnswers: ["9", "8", "5"],
//     correctAnswer: "8",
//     back:"back"
//   },
//   {
//     topic: "3",
//     question: "Arrays in java are-",
//     possibleAnswers: ["7", "Primitive_datatype", "None", "object"],
//     correctAnswer: "object",
//     back:"back"
//   },
//   {
//     topic: "4",
//     question: "Output of Math.floor(3.6)?",
//     possibleAnswers: ["3", "3.0", "5"],
//     correctAnswer: "3.0",
//     back:"back"
//   },
//   {
//     topic: "5",
//     question: "What is Runnable?",
//     possibleAnswers: ["Abstract class", "Interface", "Method"],
//     correctAnswer: "Interface",
//     back:"back"
//   },
// ,
//   {
//     topic: "restart",
//     question: " Restart Exam",
//     possibleAnswers: ["Yes"],
//     correctAnswer:'yes'
   
//   },
 
{
  topic: "science",
  question: "What color is the sky?",
  possibleAnswers: ["blue", "green", "yellow"],
  correctAnswer: "blue",
},
{
  topic: "tech",
  question: "What is the best language to learn?",
  possibleAnswers: ["javascript", "python", "ruby"],
  correctAnswer: "javascript",
},
{
  topic: "math",
  question: "what is 4 + 4",
  possibleAnswers: ["7", "8", "9", "10"],
  correctAnswer: "8",
},
{
  topic: "random",
  question: "What is your favorite energy drink?",
  possibleAnswers: ["ghost", "monster", "redbull"],
  correctAnswer: "ghost",
},
{
      topic: "restart",
      question: " Restart Exam",
      possibleAnswers: ["Yes"],
      correctAnswer:'yes'
     
    },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const back=document.getElementById("back");
const next=document.getElementById("next")

const correctAns=0;
let Ans=0;        

let currentQuestionIndex = 0;

  function handleQuestion(index)
{

 
  // handle quiz progress section
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });

  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) 
  {
    spans[i].classList.add("seen");
      
  }

  // topic/question
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p> `;

  back.innerText="<< Back";

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });


  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
     
      if (e.target.textContent === questions[index].correctAnswer) {
        let spans = document.querySelectorAll("span");
        for (let i = 0; i <= index; i++) 
        {
          // spans[i].classList.add("seen");
          if(e.target.textContent === questions[index].correctAnswer)
          {
            quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });

  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) 
   {
     spans[i].classList.add("seen1");
      
    }
   }
  }    
        console.log("correct! ");
        console.log("Q "+questions[index].topic)   
        Ans++;
        document.getElementById("score").innerText="7/"+Ans;
    } 
  else
     {
        console.log("wrong");
     
      }
      if (currentQuestionIndex === questions.length - 1) {
             
      document.getElementById("score").innerText="0";
        Ans=" ";
        console.log("if"+currentQuestionIndex)
        currentQuestionIndex = 0;
      } else {
        console.log("else cc"+currentQuestionIndex)
        console.log("----------------")
        currentQuestionIndex++;
      }
      // next.addEventListener("click",()=>
      //   {
      //      handleQuestion(currentQuestionIndex);
      //   }
      //  ) 
      handleQuestion(currentQuestionIndex);
    }); 
  });


}

back.addEventListener("click",()=>
  { 
      console.log("call")
      console.log("current "+currentQuestionIndex);
      currentQuestionIndex--;
      console.log("be currnt ="+currentQuestionIndex)
      handleQuestion(currentQuestionIndex)
  }
 )



handleQuestion(currentQuestionIndex);


