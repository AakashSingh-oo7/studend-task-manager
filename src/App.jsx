import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import EditTaskModal from "./components/EditTaskModal";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(Array.isArray(res.data) ? res.data : []);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await createTask(task);
    setTasks((prev) => [res.data, ...prev]);
  };

  const updateTaskById = async (id, data) => {
    const res = await updateTask(id, data);
    setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    setEditingTask(null);
  };

  const deleteTaskById = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  // 🔍 FILTER + SEARCH + SORT
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        (task.description || "").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "priority") {
        const order = { high: 3, medium: 2, low: 1 };
        return order[b.priority] - order[a.priority];
      }
      if (sort === "dueDate") {
        return new Date(a.dueDate || 0) - new Date(b.dueDate || 0);
      }
      if (sort === "createdAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-200">
      <Header setSearch={setSearch} />

      <main className="w-full px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <AddTaskForm onAdd={addTask} />
          </div>

          <div className="lg:col-span-2">
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              setSort={setSort}
            />

            <TaskList
              tasks={filteredTasks}
              onEdit={setEditingTask}
              onDelete={deleteTaskById}
              onToggle={updateTaskById}
            />
          </div>
        </div>
      </main>

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={updateTaskById}
        />
      )}
    </div>
  );
}

export default App;
