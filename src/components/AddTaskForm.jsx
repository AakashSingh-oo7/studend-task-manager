import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, description, priority, dueDate });
    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white  p-4 rounded shadow mb-4 space-y-2"
    >
      <input
        className="w-full border p-2 rounded"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-2">
        <select
          className="border p-2 rounded w-1/2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded w-1/2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button className="w-full bg-gray-500 text-white py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
