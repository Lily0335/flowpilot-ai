export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 p-4">
      <h2 className="text-2xl font-bold text-white mb-10">
        FlowPilot
      </h2>

      <nav className="space-y-4 text-zinc-300">
        <p className="hover:text-white cursor-pointer">
          Dashboard
        </p>

        <p className="hover:text-white cursor-pointer">
          Projects
        </p>

        <p className="hover:text-white cursor-pointer">
          Tasks
        </p>

        <p className="hover:text-white cursor-pointer">
          AI Assistant
        </p>

        <p className="hover:text-white cursor-pointer">
          Settings
        </p>
      </nav>
    </aside>
  );
}