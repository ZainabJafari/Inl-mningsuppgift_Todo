
const BAS_URL = 'https://jsonplaceholder.typicode.com/todos/'



const todosList = document.querySelector("#todos-list")
const button = document.querySelector('btnAdd')
const form = document.querySelector('#form-wrapper')
const container = document.querySelector('container')



const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const span = document.getElementsByClassName("close")[0];



const todoListArray = []



const hämtaData = () => {
    fetch(BAS_URL)
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

//--------------------------------------------------


const todoListElement = () => {
    todosList.innerHTML = ''
    todoListArray.forEach((todo) => {

        const li = document.createElement("li")
        li.className = "list-group-item"

        const content = document.createElement("span")
        content.textContent = todo.title

     //----------- Done button delen---------------   

        const doneBtn = document.createElement('img')
        doneBtn.src = "donIcon.png"
        doneBtn.alt = "done icon"
        doneBtn.className = "doneBtn"

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
                        // const todo = todoListArray.find(Todo => Todo.id == e.target.parentElement.id)
                        // console.log(todo);
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
                       
                    }

                })

        })

        //----------- Delete button delen---------------   
        const deleteBtn = document.createElement("img")
        deleteBtn.src = "delete.jpg"
        deleteBtn.className = "deleteBtn"
        deleteBtn.alt = "delete"

        deleteBtn.addEventListener('click', (e) => {
            fetch(BAS_URL + '/' + todo.id, {
                method: 'DELETE',

            }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                if(res.status === 200) {
                    li.remove()
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

const input = document.querySelector('input')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInput()

})



const checkInput = () => {

    const newTodo = {
        title: document.querySelector('#input').value,
        completed: false,
    }

    if (newTodo.title === '') {
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



const setError = (input) => {
    const titleInput = input.parentElement
    const small = titleInput.querySelector('small')
    // titleInput.classList.add('error')
    small.innerText = 'The field is required'
    small.style.color = 'red'
}

const setSuccess = (input) => {
    const titleInput = input.parentElement
    const small = titleInput.querySelector('small')
    small.innerText = '';
    input.focus()
}
