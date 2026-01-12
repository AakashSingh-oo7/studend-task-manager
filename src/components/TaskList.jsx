import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks found</p>;

  return tasks.map((task) => (
    <TaskCard
      key={task._id}
      task={task}
      onEdit={onEdit}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  ));
}
