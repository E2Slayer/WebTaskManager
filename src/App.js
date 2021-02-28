import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Paying Monthly Car Insurance",
      day: "5:00 PM Feb 27, 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Online Meeting",
      day: "8:00 PM Feb 27, 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "Picking up a key from the office",
      day: "9:30 AM Feb 28, 2021",
      reminder: true,
    },
  ]);

  // Delete a Task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle a Reminder

  const toggleReminder = (id) => {
    console.log("toggle ", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add a Task

  const addTask = (task) => {
    console.log(task);

    const id = Math.floor(Math.random() * 100) + 1;

    const newTask = {
      id,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header onShowAddTask={toggleAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to Show"
      )}
    </div>
  );
}

export default App;
