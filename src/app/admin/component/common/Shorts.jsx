"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Shorts() {
  const [iframe, setIframe] = useState("");
  const [videos, setVideos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editIframe, setEditIframe] = useState("");

  const fetchVideos = async () => {
    const res = await axios.get("http://localhost:5000/header-shorts-upload");
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleUpload = async () => {
    if (!iframe.includes("iframe")) return alert("Please enter valid iframe code");
    await axios.post("http://localhost:5000/header-shorts-upload", { iframe });
    setIframe("");
    fetchVideos();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/header-shorts-upload/${id}`);
    fetchVideos();
  };

  const startEdit = (video) => {
    setEditingId(video._id);
    setEditIframe(`<iframe src="${video.src}" ...></iframe>`);
  };

  const saveEdit = async () => {
    await axios.put(`http://localhost:5000/header-shorts-upload/${editingId}`, { iframe: editIframe });
    setEditingId(null);
    setEditIframe("");
    fetchVideos();
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-semibold">📽️ Upload Header Shorts</h1>

      <textarea
        className="w-full p-2 mb-2 border rounded-md"
        rows={3}
        value={iframe}
        onChange={(e) => setIframe(e.target.value)}
        placeholder="Paste YouTube iframe here"
      ></textarea>
      <button
        onClick={handleUpload}
        className="px-4 py-2 mb-6 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Upload
      </button>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-left bg-white border border-gray-200">
          <thead className="text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">Thumbnail</th>
              <th className="px-4 py-3 text-right border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={video._id} className="transition-all hover:bg-gray-50">
                <td className="px-4 py-3 border">{index + 1}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={video.thumbnail}
                    alt="Thumbnail"
                    className="object-cover w-full rounded shadow h-28"
                  />
                </td>
                <td className="px-4 py-3 border">
                  {editingId === video._id ? (
                    <div className="space-y-2">
                      <textarea
                        className="w-full p-2 border rounded"
                        rows={2}
                        value={editIframe}
                        onChange={(e) => setEditIframe(e.target.value)}
                      ></textarea>
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditIframe("");
                          }}
                          className="px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 md:flex-row md:justify-end">
                      <button
                        onClick={() => startEdit(video)}
                        className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(video._id)}
                        className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {videos.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                  No videos uploaded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shorts;