var submitBtn = document.querySelector('.submit')
var userQuestion = document.querySelector('input')
var displayQuestion = document.querySelector('.question')
var displayAnswer = document.querySelector('.answer')
var clearBtn = document.querySelector('.clear')
var answerField = document.querySelector('.answerField')
var ballContainer = document.querySelector('#container')

userQuestion.addEventListener("keydown", activate)
submitBtn.addEventListener("click", display)
submitBtn.addEventListener("mouseover", colorChange)
submitBtn.addEventListener("mouseout", colorChange)
clearBtn.addEventListener("click", clearField)

var answers = ["It is certain.", 
"It is decidedly so.", 
"Without a doubt.", 
"Yes - definitely.", 
"You may rely on it.", 
"As I see it, yes.", 
"Most likely.", 
"Outlook good.", 
"Yes.", 
"Signs point to yes.", 
"Reply hazy, try again.", 
"Ask again later.", 
"Better not tell you now.", 
"Cannot predict now.", 
"Concentrate and ask again.", 
"Don't count on it.", 
"My reply is no.", 
"My sources say no.", 
"Outlook not so good.", 
"Very doubtful."]

function display() {
    if (userQuestion.value !== "") {
        ballContainer.classList.remove('eightBall')
        displayQuestion.innerHTML = `"${userQuestion.value}"`
        displayAnswer.innerHTML = selectAnswer()
        userQuestion.value = ''
        clearBtn.classList.toggle('clearDisable')
    } else {
        alert `Please ask a question first!`
    }
}

function selectAnswer() {
    return answers[Math.floor(Math.random()*answers.length)]
}

function clearField() {
    if (displayQuestion.innerHTML !== '' && displayAnswer.innerHTML !== '') {
        displayQuestion.innerHTML = ""
        displayAnswer.innerHTML = ""
        ballContainer.classList.add('eightBall')
        clearBtn.classList.toggle('clearDisable')
    }
}

function colorChange() {
    submitBtn.classList.toggle('submitHover')
}

function activate() {
    submitBtn.classList.add('submitDisable')
}