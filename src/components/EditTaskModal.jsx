import { useState } from "react";

export default function EditTaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(
    task.dueDate ? task.dueDate.slice(0, 10) : ""
  );

  const submit = (e) => {
    e.preventDefault();
    onSave(task._id, { title, description, priority, dueDate });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <form onSubmit={submit} className="bg-white p-6 rounded w-96 space-y-2">
        <h2 className="text-lg font-bold">Edit Task</h2>

        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="flex justify-between pt-2">
          <button type="button" onClick={onClose} className="text-gray-600">
            Cancel
          </button>
          <button className="bg-gray-500 text-white px-4 py-1 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
