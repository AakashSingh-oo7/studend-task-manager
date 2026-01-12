export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <h3
        className={`font-semibold ${
          task.completed && "line-through text-gray-400"
        }`}
      >
        {task.title}
      </h3>

      {task.description && (
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      )}

      <div className="text-xs text-gray-500 mt-1">
        Created: {new Date(task.createdAt).toLocaleString()}
      </div>

      <div className="flex justify-between items-center mt-3 text-sm">
        <div>
          <span className="capitalize mr-3 font-medium">{task.priority}</span>

          {task.dueDate && (
            <span className="text-gray-500">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>

        <div className="space-x-2">
          <button
            onClick={() => onToggle(task._id, { completed: !task.completed })}
            className="text-green-600"
          >
            {task.completed ? "Undo" : "Done"}
          </button>

          <button onClick={() => onEdit(task)} className="text-blue-600">
            Edit
          </button>

          <button onClick={() => onDelete(task._id)} className="text-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
