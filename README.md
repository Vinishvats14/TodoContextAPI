
# 📋 Todo App (React + Context API)

A simple and clean Todo app built with **React** using **Context API** for state management.  
You can add, edit, delete, and mark todos as completed.  
All todos are saved in **localStorage** so your data persists even after refreshing the page.  

---

## 🚀 Features

✅ Add new todos  
✅ Edit existing todos  
✅ Delete todos  
✅ Mark todos as completed  
✅ Persistent storage with `localStorage`  
✅ State management using **React Context API**  
✅ Responsive and minimal UI  

---

## 🖥️ Tech Stack

- **React** (with functional components & hooks)  
- **Context API** for global state  
- **Tailwind CSS** for styling  

---

## 📦 Installation

1. **Clone the repository**  
```bash
git clone https://github.com/vinu014/<your-repo-name>.git
```

2. **Navigate to the project folder**  
```bash
cd <your-repo-name>
```

3. **Install dependencies**  
```bash
npm install
```

4. **Start the development server**  
```bash
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173) (if you’re using Vite).

---

## 🛠 Folder Structure

```
src/
│
├── components/
│   ├── TodoForm.jsx      # Add new todo form
│   └── TodoItem.jsx      # Single todo item (edit, delete, toggle)
│
├── contexts/
│   └── TodoContext.jsx   # Context API logic
│
├── App.jsx               # Main app file
├── main.jsx              # Entry point
└── index.css             # Styling (Tailwind)
```

---

## ⚙️ How it works?

📂 `TodoContext.jsx`  
- Provides the global `todos` state and functions like `addTodo`, `deleteTodo`, `updateTodo`, `toggleComplete` using React’s Context API.  

📂 `TodoForm.jsx`  
- A controlled form to create new todos.  

📂 `TodoItem.jsx`  
- Displays each todo with edit/delete and completed toggle functionality.  

🗄️ **LocalStorage** is used to save todos between page reloads.  

---

## 🖤 Author

Built with ❤️ by [vinu014](https://github.com/vinu014)  

---

## ⭐ Contribute

Feel free to fork the project and submit a pull request.  
