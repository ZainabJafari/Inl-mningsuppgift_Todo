
const BAS_URL = 'https://jsonplaceholder.typicode.com/todos/'

const todosList = document.querySelector("#todos-list")
const button = document.querySelector('btnAdd')
const form = document.querySelector('#form-wrapper')
const container = document.querySelector('container')
const input = document.querySelector('input')
const modal = document.querySelector("#myModal");
const closeButton = document.querySelector("#close");

const todoListArray = []

// ---------------Hämta data-----------------------
const hämtaData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
        .then(res => res.json())
        .then(data => {
            data.forEach(todo => {
                todoListArray.push(todo)

                //    console.log(todo);
            })

            todoListElement()
        })


}
hämtaData()

//-----------------Skapa elemenet---------------------------------

const todoListElement = () => {
    todosList.innerHTML = ''
    todoListArray.forEach((todo) => {


        const li = document.createElement("li")
        li.className = "list-group-item"

        if(todo.completed){
            li.classList.add('hidden')
        }

        const content = document.createElement("span")
        content.textContent = todo.title

     //----------- Done button delen---------------   

        const doneBtn = document.createElement('img')
        doneBtn.src = "donIcon.png"
        doneBtn.alt = "done icon"
        doneBtn.className = "doneBtn"

        const deleteBtn = document.createElement("img")
        deleteBtn.src = "delete.jpg"
        deleteBtn.className = "deleteBtn"
        deleteBtn.alt = "delete"

        doneBtn.addEventListener('click', (e) => {
            fetch(BAS_URL + '/' + todo.id, {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: true,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                    if (res.completed === true) {
                        e.target.parentElement.classList.add('hidden')
                        todo.completed = res.completed
                        modal.style.display = "none"
                        // const index = todoListArray.find(_todo => _todo.id == todo.id)
                        // console.log(index);
                    }
                })

        })

        //----------- Back button delen---------------   


        const backBtn = document.createElement('img')
        backBtn.src = 'back.jpg'
        backBtn.alt = 'back icon'
        backBtn.className = 'backBtn'


        backBtn.addEventListener('click', (e) => {
            fetch(BAS_URL + '/' + todo.id, {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: false,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    if (res.completed === false) {
                        e.target.parentElement.classList.remove('hidden')
                        todo.completed = res.completed

                       
                    }

                })

        })


        deleteBtn.addEventListener('click', (e) => {

            if(todo.completed === false){
               modal.style.display = "block"

                closeButton.addEventListener('click', e =>{
                 e.target.parentElement.style.display = "none"

                })
             return

            }
            
            fetch(BAS_URL + '/' + todo.id, {
                method: 'DELETE',

            })
            .then((res) => {
                console.log(res);
                if(res.status === 200) {
                    li.remove()
                    const index = todoListArray.findIndex(_todo => _todo.id == todo.id)
                    todoListArray.splice(index, 1)
                }

            })

        })


        li.appendChild(content)
        li.appendChild(deleteBtn)
        li.appendChild(doneBtn)
        li.appendChild(backBtn)
        todosList.appendChild(li)

        return li

    })


}



//-------------------Input delen--------------------------------


form.addEventListener('submit', e => {
    e.preventDefault()
    checkInput()

})



const checkInput = () => {

    const newTodo = {
        title: document.querySelector('#input').value,
        completed: false,
    }

    if (newTodo.title.trim() === '') {
        setError(input)
    }
    else {
        setSuccess(input)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => response.json())
            .then((data) => {
                data.id = crypto.randomUUID()
                todoListArray.unshift(data)
                todoListElement()
                console.log(data);
            })
        }
}    

//--------funktioner för validera formulären

const setError = (input) => {
    const titleInput = input.parentElement
    const small = titleInput.querySelector('small')
    small.innerText = 'The field is required'
    small.style.color = 'red'
}

const setSuccess = (input) => {
    const titleInput = input.parentElement
    const small = titleInput.querySelector('small')
    small.innerText = '';
    input.focus()
}
