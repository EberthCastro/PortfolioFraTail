import React, { useState } from "react";
import axios from "axios";


const endpoint = "http://127.0.0.1:8000/api/projects";

function Create() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tech, setTech] = useState("");
    const [cover, setCover] = useState("");
    const [url_deploy, setUrl_Deploy] = useState("");
    const [url_github, setUrl_Github] = useState("");

    const handleCreateProject = async () => {
        try {
          const token = localStorage.getItem("token");
          const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
          const response = await axios.post(endpoint, {
            title: title,
            description: description,
            tech: tech,
            cover: cover,
            url_deploy: url_deploy,
            url_github: url_github,
          }, { headers });
          console.log(response.data);
        } catch (error) {
          console.error(error.response.data.message);
        }
      };

      
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateProject();
  }




  return (
    <div class="flex flex-col items-center p-6">
  <form onSubmit={handleSubmit} class="w-full max-w-sm">
    <label htmlFor="title" class="block font-bold mb-2">Título:</label>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} id="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="description" class="block font-bold mb-2">Descripción:</label>
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} id="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="tech" class="block font-bold mb-2">Tecnologías:</label>
    <input type="text" value={tech} onChange={e => setTech(e.target.value)} id="tech" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="cover" class="block font-bold mb-2">Portada:</label>
    <input type="text" value={cover} onChange={e => setCover(e.target.value)} id="cover" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="url_deploy" class="block font-bold mb-2">URL despliegue:</label>
    <input type="text" value={url_deploy} onChange={e => setUrl_Deploy(e.target.value)} id="url_deploy" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="url_github" class="block font-bold mb-2">URL Github:</label>
    <input type="text" value={url_github} onChange={e => setUrl_Github(e.target.value)} id="url_github" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Crear proyecto</button>
  </form>
</div>
  )
}

export default Create
