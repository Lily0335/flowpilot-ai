import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 text-white">
          <h2 className="text-3xl font-bold">
            Welcome to FlowPilot AI
          </h2>
        </main>
      </div>
    </div>
  );
}