let game = document.querySelector(".game")
let game_cell = document.querySelector(".game__cell")
let score_title = document.querySelector(".score__title")

let score = 0

let board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

function startGame() {

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {
            let game_cell = document.createElement("div")
            game_cell.id = i + "-" + j
            game_cell.classList.add("game__cell")
            let num = board[i][j]
            game_cell.classList.add("x" + num)
            if (num > 0) {
                game_cell.textContent = num.toString()
            }
            game.appendChild(game_cell)
        }
    }
    score_title.textContent = `SCORE: ${score}`
}



startGame()
setTwo()
setTwo()



function moveLeft(event) {
    if (event.key === "ArrowLeft") {

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Объединяем элементы
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === board[i][j+1]) {
                    board[i][j] = board[i][j] * 2
                    score = score + board[i][j+1]
                    board[i][j+1] = 0
                }
            }
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Заполняем оставшееся пространство массива нулями
        for (let i = 0; i < board.length; i++) {
            while (board[i].length < 4) {
                board[i].push(0)
            }
        }

        game.innerHTML = ""

        startGame()
        setTwo()
    }
}




function moveRight(event) {
    if (event.key === "ArrowRight") {

        // "Переворачиваем"/"Разворачиваем" массив
        for (let i = 0; i < board.length; i++) {
            board[i].reverse()
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Объединяем элементы
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === board[i][j+1]) {
                    board[i][j] = board[i][j] * 2
                    score = score +board[i][j+1]
                    board[i][j+1] = 0
                }
            }
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Заполняем оставшееся пространство массива нулями
        for (let i = 0; i < board.length; i++) {
            while (board[i].length < 4) {
                board[i].push(0)
            }
        }

        // "Переворачиваем"/"Разворачиваем" массив
        for (let i = 0; i < board.length; i++) {
            board[i].reverse()
        }

        game.innerHTML = ""

        startGame()
        setTwo()

    }
}




function moveUp(event) {
    if (event.key === "ArrowUp") {

        //Транспонируем матрицу
        rotateMatrix(board)

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Объединяем элементы
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === board[i][j+1]) {
                    board[i][j] = board[i][j] * 2
                    score = score + board[i][j+1]
                    board[i][j+1] = 0
                }
            }
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Заполняем оставшееся пространство массива нулями
        for (let i = 0; i < board.length; i++) {
            while (board[i].length < 4) {
                board[i].push(0)
            }
        }

        //Транспонируем матрицу
        rotateMatrix(board)


        game.innerHTML = ""
        startGame()
        setTwo()
    }
}





function moveDown(event) {
    if (event.key === "ArrowDown") {

        //Транспонируем матрицу
        rotateMatrix(board)

        // "Переворачиваем"/"Разворачиваем" массив
        for (let i = 0; i < board.length; i++) {
            board[i].reverse()
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Объединяем элементы
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === board[i][j+1]) {
                    board[i][j] = board[i][j] * 2
                    score = score + board[i][j+1]
                    board[i][j+1] = 0
                }
            }
        }

        //Убираем все нули
        for (let i = 0; i < board.length; i++) {
            board[i] = board[i].filter(function (element) {
                return element !== 0
            })
        }

        // Заполняем оставшееся пространство массива нулями
        for (let i = 0; i < board.length; i++) {
            while (board[i].length < 4) {
                board[i].push(0)
            }
        }


        // "Переворачиваем"/"Разворачиваем" массив
        for (let i = 0; i < board.length; i++) {
            board[i].reverse()
        }

        //Транспонируем матрицу
        rotateMatrix(board)

        game.innerHTML = ""
        startGame()
        setTwo()
    }
}




function rotateMatrix(arr) {
    let row
    let currentLength

    for (let i = 0; i < arr.length; i++) {
        row = []
        for (let j = 0; j < arr[i].length; j++) {
            row.push(arr[j][i])
        }
        arr[i].push(...row)
        currentLength = (arr[i].length/2)
    }

    for (let i = 0; i < arr.length; i++) {
        while (arr[i].length > currentLength) {
            arr[i].shift()
        }
    }

    return arr
}



function setTwo() {

    if (board.flat(Infinity).indexOf(0) !== -1) {

        let i = getRandomInt(0, 3)
        let j = getRandomInt(0, 3)

        if (document.getElementById(i + "-" + j).classList.contains("x0")) {
            document.getElementById(i + "-" + j).className = ""
            document.getElementById(i + "-" + j).classList.add("game__cell")
            document.getElementById(i + "-" + j).classList.add("x2")
            document.getElementById(i + "-" + j).textContent = "2"
            board[i][j] = 2
        }

        else{
            setTwo()
        }

    }

}





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




document.addEventListener("keyup", moveLeft)
document.addEventListener("keyup", moveRight)
document.addEventListener("keyup", moveUp)
document.addEventListener("keyup", moveDown)




