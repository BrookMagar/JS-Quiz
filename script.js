function generalQuiz(){

var questions = [
    {
          prompt: "Who is the greatest coding Mentor of all?\n(A) Jarec\n\(B) Tonette\n(C) Brook",
          answer: "b"
    },
    {
         prompt: "What is commonly seen after a rainstorm?\n(A) Rainbow\n\(B) Sunbow\n(C) Starbow",
         answer: "a"
    },
    {
         prompt: "What is the 10th letter of the alphabet?\n(A) Z\n\(B) L\n(C) J",
         answer: "c"
    },
    {
        prompt: "What state is considered the Sunflower state?\n(A) Florida\n\(B) Kansas\n(C) Mississippi",
        answer: "b"
   },
   {
        prompt: "What is white, black and read all over?\n(A) Zebra\n\(B) Newspaper\n(C) Uncle Joe",
        answer: "b"
}
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Great job, that is correct!");
    } else {
         alert("Sorry, that's incorrect!");
    }
}
alert("you got " + score + "/" + questions.length);

};

function mathQuiz(){

    var questions = [
        {
              prompt: "What is 7 * 9?\n(A) 63\n\(B) 16\n(C) 160",
              answer: "a"
        },
        {
             prompt: "What is 127-62?\n(A) 65\n\(B) 189\n(C) 7,874",
             answer: "a"
        },
        {
             prompt: "What is the square root of 729?\n(A) 13\n\(B) 40\n(C) 27",
             answer: "c"
        },
        {
            prompt: "What is 8 + 3?\n(A) 34\n\(B) 11\n(C) 9",
            answer: "b"
       },
       {
            prompt: "What is half of 88?\n(A) 22\n\(B) 44\n(C) 66",
            answer: "b"
    }
    ];
    var score = 0;
    
    for(var i = 0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
             score++;
             alert("Great job, that is correct!");
        } else {
             alert("Sorry, that's incorrect!");
        }
    }
    alert("you got " + score + "/" + questions.length);
    
    }

    function cinderellaQuiz(){

        var questions = [
            {
                  prompt: "How many stepsisters does Cinderella have?\n(A)  2\n\(B)  4\n(C)  5",
                  answer: "a"
            },
            {
                 prompt: "What is the name of the mouse that Cinderella rescues?\n(A)  Gus\n\(B)  Simon\n(C)  Theodore",
                 answer: "a"
            },
            {
                 prompt: "Why does the King throw a ball for his son?\n(A) To find him a job\n\(B) His birthday\n(C) To find him a wife",
                 answer: "c"
            },
            {
                prompt: "What happens to Cinderella's first dress she planned to wear?\n(A) She loses it\n\(B) She spills on it\n(C) Her stepsisters destroy it",
                answer: "c"
           },
           {
                prompt: "What phrase does Fairy Godmother use to do her magic?\n(A) Beep Boop Boo\n\(B) Bippity Boppity Boo\n(C) Boo Hoo Hoo",
                answer: "b"
        }
        ];
        var score = 0;
        
        for(var i = 0; i < questions.length; i++){
            var response = window.prompt(questions[i].prompt);
            if(response == questions[i].answer){
                 score++;
                 alert("Great job, that is correct!");
            } else {
                 alert("Sorry, that's incorrect!");
            }
        }
        alert("you got " + score + "/" + questions.length);
        
        }