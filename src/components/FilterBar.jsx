export default function FilterBar({ filter, setFilter, setSort }) {
  const filters = ["all", "pending", "completed"];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded capitalize transition
              ${
                filter === f
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {f}
          </button>
        ))}
      </div>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-1 rounded"
      >
        <option value="">Sort by</option>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
        <option value="createdAt">Created Date</option>
      </select>
    </div>
  );
}
