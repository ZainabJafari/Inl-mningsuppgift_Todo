

const lista = document.querySelector('#list-group')

const BAS_URL = 'https://jsonplaceholder.typicode.com/todos'

const todos = []



const getTodo = () =>{
    fetch(BAS_URL)
    .then (res => res.json())
    .then(data =>{

        data.forEach(todo => {
            todos.push(todo)


         console.log(todo.title);


        });

        listTodo()

    })


 
}

getTodo()

const listTodo = () =>{



    todos.forEach(todo =>{
        const todoElement = createTodoElement(todo)
        lista.appendChild(todoElement)
    })
}

const createTodoElement = (todoData) =>{


    const li = document.createElement('li')
    li.classList.add = ('list-group-item')

    const content = document.querySelector('span')
    content.classList.add('content')
    content.textContent = todoData.title

    const deleteBtn = document.querySelector("img")
    deleteBtn.src = "Bilder/istockphoto-1282369003-612x612.jpg"
    deleteBtn.alt = "delete icon"

    const doneBtn = document.querySelector('img')
    doneBtn.src = "Bilder/donIcon.png"
    doneBtn.alt = "done icon"

    li.appendChild(content)
    li.appendChild(deleteBtn)
    li.appendChild(doneBtn)

    lista.appendChild(li)

    return user

}


     
createTodoElement()




















const hanteraSubmit = e => {

    const newTodo = {
        title: document.querySelector('#input').value,
        completed: false,
    }

    if(newTodo.title === ''){
        console.log('lol');
    }
    // else{
    //     return true
    // }

    // const setError = (newTodo) =>{
    //     newTodo.classList.add('error')
    // }




    // const createElement = (p) => {

//     let li = document.createElement("li")
//     li.className = "list-group-item"

     
//     let content = document.createElement("span")
//     content.textContent = todo

//     li.appendChild(content)
//     todosList.appendChild(li)

// }

// createElement()




    
//     data.forEach(element => {
//         console.log(element);

//         todosList.innerHTML = ''

//         let li = document.createElement("li")
//         li.className = "list-group-item"

         
//         let content = document.createElement("span")
//         content.textContent = element.title

//         li.appendChild(content)
//         todosList.appendChild(li)

        



//     });
// })



// const createTodos = () => {
//     fetch(BAS_URL)
//         .then(res => res.json())
//         .then(data =>{
//             return data.json()

//           // console.log(JSON.stringify(data));
        
//           test.innerHTML = `<p>${data.title}</p>`

//             // create list tag for each todo
//          data.forEach((todo, index) => {

//             console.log(todo.title);

         
//          let li = document.createElement("li")
//          li.className = "list-group-item"

//          let content = document.createElement("span")
//          content.textContent = todo.title
         
//          content.style.textDecoration = todo.status ? "initial" : "line-through"
//          let deleteBtn = document.createElement("img")
//          deleteBtn.src = "istockphoto-1282369003-612x612.jpg"
//          deleteBtn.alt = "delete"

//          // append contant anf deleteBtn to li
//          li.appendChild(content)
//          li.appendChild(deleteBtn)

//          // append li to todosList

//          todosList.appendChild(li)

//          // när man kilckar på radera

         
//          deleteBtn.addEventListener("click", e =>{
//          todo.splice(index ,1)
//          localStorage.setItem("todos", JSON.stringify(todo))
//          createTodos(todo)
//          })
//          // för att få streck och ta bort den
//          content.addEventListener("click", e =>{
//          todo[index].status = !todo[index].status
//          localStorage.setItem("todo", JSON.stringify(todo))
//          createTodos(todo)
//         }) 
//     })

//     });

// }

// createTodos()


// // action add och search
// let actions = document.querySelector("#action")
// let formWrapper = document.querySelector("#form-wrapper")

// Array.from(actions.children).forEach(action => {
//       // add något i todos
//     if (action.dataset.action == "add"){
//         action.addEventListener("click", e =>{
//             formWrapper.innerHTML = `
//              <form id="add">
//                   <input class="form-control" name="add" placeholder="Add">
//              </form>
`
// add någåt i todos och lägg den i todos list i lokalstorge
//let add = document.querySelector("#add")
/*add.addEventListener("submit", e =>{
    e.preventDefault()
    if (add.add.value){
        todos.push.({content: add.add.value, status: true})
        localStorage.setItem("todos", JSON.stringify(todos))
        createTodos(todos)
    }
}) 

})
} 

//     // search nåt i todos
//     else if (action.dataset.action == "search"){
//         action.addEventListener("click", e =>{
//             formWrapper.innerHTML = `
//              <form id="search">
//                  <input class="form-control" name="search" placeholder="Search">
//               </form>
//             `

//         })
//     } 


// })
 








        // deleteBtn.addEventListener('click', e => {
        //  fetch(BAS_URL + '/' + todo.id,)
        //    method: 'DELETE'

        // }).then(res => {
        //     console.log(res);
        //     if (res.status === 200) {
        //         li.remove()

        //     // .then(res => res.json())
        //     // .then(data => {
        //     //     // console.log(data);

        //     //     fetch(BAS_URL + '/' + todo.id, {
                    
              
        //                 const index = todoListArray.findIndex(todo => todo.id == e.target.parentElement.id)
        //                 todoListArray.splice(index, 1)
        //             }
        //         })
        // if (data.completed === false) {
                    //     console.log(data.completed);

                        
                    //     console.log('du ska tyrycka');
                    //     modal.style.display = "block";
                    //     return false
                    // }
                  


                    // else if(data.completed === true){
                    
                    // }

                  
                

                    )













// todosList.addEventListener('click', e =>{
//     if(e.target.className === 'deleteBtn'){
//         // fetch(BAS_URL + '/' '')
//         e.target.parentElement.remove()
//     }
// })



// todosList.addEventListener('click', e=>{
//     if(e.target.className === 'doneBtn'){
//         e.target.parentElement.classList.toggle('hidden')
//     }
// })

