document.addEventListener('click', event => {
    if(event.target.dataset.type === "remove") {
        const id = event.target.dataset.id
        remove(id).then(()=>{
            event.target.closest('li').remove()
        })
    } else if(event.target.dataset.type === "update") {
        const id = event.target.dataset.id
        const newTitle = prompt("Введите новое название")
        const data = {
            id, title: newTitle
        }
        if(newTitle){
            update(data).then(()=> {
                event.target.parentNode.querySelector('p').textContent = newTitle
            })
        }
    }
    }
)
async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}
async function update(data) {
    await fetch(`/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
}