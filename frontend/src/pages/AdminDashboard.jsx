import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);

  // fetch all sections
  useEffect(() => {
    API.get("/sections").then((res) => setSections(res.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* Sections List */}
        <h2 className="text-xl font-semibold mb-4">Website Sections</h2>

        <div className="space-y-4">
          {sections.map((sec) => (
            <div
              key={sec._id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <span className="font-medium capitalize">{sec.name}</span>

              <button
  onClick={() => navigate(`/admin/edit/${sec.name}`)}
  className="bg-green-600 text-white px-3 py-1 rounded"
>
  Edit
</button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
