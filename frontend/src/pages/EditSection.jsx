import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function EditSection() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);

  // fetch section
  useEffect(() => {
    API.get("/sections").then((res) => {
      const section = res.data.find((s) => s.name === name);
      setForm(section?.content || {});
    });
  }, [name]);

  // change string field
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // change array item
  const handleArrayChange = (key, index, value) => {
    const updated = [...form[key]];
    updated[index] = value;

    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  // save
  const handleSave = async () => {
    await API.put(`/sections/${name}`, { content: form });
    alert("Section updated!");
    navigate("/admin/dashboard");
  };

  if (!form) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6 capitalize">
          Edit {name} Section
        </h1>

        <div className="space-y-4">

          {Object.entries(form).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-1 capitalize">
                {key}
              </label>

              {/* STRING FIELD */}
              {typeof value === "string" && (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border p-2 rounded"
                />
              )}

              {/* ARRAY FIELD */}
              {Array.isArray(value) && (
                <div className="space-y-2">
                  {value.map((item, i) => (
                    <input
                      key={i}
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleArrayChange(key, i, e.target.value)
                      }
                      className="w-full border p-2 rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>

        <button
          onClick={handleSave}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
