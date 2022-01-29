


// Change Theme
const themeIcon = document.querySelector('.change-theme');
const body = document.querySelector('body');

themeIcon.addEventListener('click', function(){
    document.body.classList.toggle('light'); 
    if(document.body.classList.contains('light')) {
        themeIcon.src = "images/icon-moon.svg";
        themeIcon.style.transition = "all 300ms";
        document.querySelector('.bgphoto').src = "images/bg-desktop-light.jpg";
        document.querySelector('.bgphoto').style.transition = "all 300ms";
    } else {
        themeIcon.src = "images/icon-sun.svg";
        themeIcon.style.transition = "all 300ms";
        document.querySelector('.bgphoto').src = "images/bg-desktop-dark.jpg";
        document.querySelector('.bgphoto').style.transition = "all 300ms";
    }
})

//Add Items
const todoInput = document.getElementById('current-todo');
const addBtn = document.querySelector('.check');

addBtn.addEventListener('click', () => {
    if (todoInput.value.length > 0) {
        addItems(todoInput.value); //add function
        todoInput.value = '';
    }
})
todoInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter" && todoInput.value.length > 0 ) {
        addItems(todoInput.value);
        todoInput.value = '';
    }
})

// Add Item Functions
const ul = document.querySelector('.todos');
function addItems(todo) {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-wrapper');
    ul.appendChild(li);
    li.innerHTML = `
        <input type="checkbox" />
        <span>${todo}</span>
        <img src="./images/icon-cross.svg" class="remove" alt="cross">`;
    updateCount(1);
}


// remove item
ul.addEventListener('click', deleteCheck);

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === 'remove') {
        const todo = item.parentElement;
        // console.log(todo);
        todo.remove();
        removeCount(1);
    }
}

// Items Count
const itemsCount = document.querySelector('.footer .items-left span');
const itemsCountMob = document.querySelector('.mob .items-left span');
itemsCount.innerText = document.querySelectorAll('.list-wrapper').length;
itemsCountMob.innerText = document.querySelectorAll('.list-wrapper').length;

function updateCount(num) {
    itemsCount.innerText = +itemsCount.innerText + num;
    itemsCountMob.innerText = +itemsCountMob.innerText + num;
}

function removeCount(num) {
    itemsCount.innerText = +itemsCount.innerText - num;
    itemsCountMob.innerText = +itemsCountMob.innerText - num;
}