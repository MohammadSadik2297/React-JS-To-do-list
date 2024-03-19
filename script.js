// Redux setup
const initialState = {
    todos: []
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  }
  
  const store = Redux.createStore(rootReducer);
  
  // Form submit event listener
  document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const note = document.getElementById('note').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const todo = {
      id: Date.now(),
      note,
      name,
      email,
      phone
    };
  
    store.dispatch({ type: 'ADD_TODO', payload: todo });
    renderTodos();
    document.getElementById('todoForm').reset();
  });
  
  // Delete todo event listener
  document.getElementById('todoList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      const todoId = parseInt(event.target.dataset.id);
      store.dispatch({ type: 'DELETE_TODO', payload: todoId });
      renderTodos();
    }
  });
  
  // Function to render todos
  function renderTodos() {
    const todos = store.getState().todos;
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
  
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.innerHTML = `
        <strong>Note:</strong> ${todo.note} - 
        <strong>Name:</strong> ${todo.name} - 
        <strong>Email:</strong> ${todo.email} - 
        <strong>Phone:</strong> ${todo.phone}
        <button class="delete-button" data-id="${todo.id}">Delete</button>
      `;
      todoList.appendChild(li);
    });
  }
  
  // Initial render
  renderTodos();