export default function Header({ setSearch }) {
  return (
    <header className="bg-gray-600 text-white px-4 py-3">
      <div className="mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-bold text-left">Student Task Manager</h1>

        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full sm:w-64 px-3 py-2 rounded text-black bg-white focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
