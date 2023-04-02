const grid =  document.querySelector('.grid')
const blockWidth= 100
const blockHeight = 20
const gridWidth = 560
const gridHeight = 300
let timerId
let ballDiameter = 20
let xDirection = -2
let yDirection = 2
let finalScore = 0 

const startUser = [230,10]
let currentPosition = startUser

const startBall = [270,40]
let ballCurrentPosition = startBall
const userScore =document.querySelector('.score')
const userResult =document.querySelector('#result')

class Block{

    constructor(xAxix , yAxis){
        this.bottomLeft = [xAxix , yAxis]
        this.bottomRight = [xAxix + blockWidth , yAxis]
        this.topLeft = [xAxix ,yAxis = blockHeight]
        this.topRight = [xAxix + blockWidth , yAxis + blockHeight]

    }


}

const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210)


]


function addBlocks(){
    for(let i=0 ; i<blocks.length ; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        // block.style.left = '100px'
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        // block.style.bottom ='50px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }

}

addBlocks()

//add user
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

function drawball(){
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//mover
function moveUser(u){
    switch(u.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
            currentPosition[0] -=10
            drawUser()
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < gridWidth - blockWidth){
            currentPosition[0] +=10
            drawUser()
            }
            break;
            

    }
}

//draw a ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawball()
grid.appendChild(ball)


document.addEventListener('keydown',moveUser)



//move ball
function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawball()
    checkCollision()
}

timerId = setInterval(moveBall, 20)

//check for the collison
function checkCollision(){

    
    for(let counter = 0 ;counter < blocks.length ; counter++){
        if(ballCurrentPosition[0] > blocks[counter].bottomLeft[0] 
            && ballCurrentPosition[0]<blocks[counter].bottomRight[0]
            && ballCurrentPosition[1]+ballDiameter > blocks[counter].bottomLeft[1] 
            //&& ballCurrentPosition[1] < blocks[counter].topLeft[1]
            )
        {

            const allblocks = Array.from(document.querySelectorAll('.block'))

        console.log(allblocks);
        allblocks[counter].classList.remove('block')
        blocks.splice(counter,1)
        changeDirection()
        finalScore++
        userScore.innerHTML = finalScore
        }
            
    }
    
    //wall collision

    if(ballCurrentPosition[0] >= (gridWidth - ballDiameter)  || 
    ballCurrentPosition[1] >= (gridHeight - ballDiameter) ||
    ballCurrentPosition[0] <=0)
    {
    changeDirection()
    }

    //userpaddle collision
    if(ballCurrentPosition[0] > currentPosition[0] &&
        ballCurrentPosition[0] < currentPosition[0] + blockWidth
        && ballCurrentPosition[1] > currentPosition[1] &&
        ballCurrentPosition[1] < currentPosition[1] + blockHeight
        ){
            changeDirection()
        }

    //bottom grid collision
    if(ballCurrentPosition[1] <=0)
    {
        clearInterval(timerId)
        alert("Better luck next time")
        userResult.innerHTML = "Better luck next time"
        document.removeEventListener('keydown',moveBall)
    }
}

function changeDirection(){

    if(xDirection === 2 && yDirection === 2){
        yDirection =-2
        return
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2
        return
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2
        return
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2
        return
    }


}