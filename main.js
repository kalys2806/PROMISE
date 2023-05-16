fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const li = document.createElement('li')
            li.innerText = todo.title
            list.append(li)
        })
    })
    .catch(error => {
        console.log('Error:', error)
    })




fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'applicattion/shop'
    },
    body: JSON.stringify({ title: 'Hello!' })
})
    .then(response => response.json())
    .then(todo => console.log(todo))
    .catch(error => {
        console.log('Error:', error)
    })