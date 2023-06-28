"use client"
import { useState } from "react"
import axios from "axios"
export default function Form() {
    const [dados, setDados] = useState({

        name: '',
        email: '',
        textArea: ''
    })
    const Handle = async () => {
        try {
            const response = await axios.post('http://localhost:8080', {
                name: dados.name,
                email: dados.email,
                // textArea: dados.textArea
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={Handle} className="w-full max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                <input value={dados.name} onChange={({ target }) => setDados({ ...dados, name: target.value })} type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Digite seu nome" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                <input value={dados.email} onChange={({ target }) => setDados({ ...dados, email: target.value })} type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Digite seu e-mail" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                <textarea value={dados.textArea} onChange={({ target }) => setDados({ ...dados, textArea: target.value })} id="message" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Digite sua mensagem"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 focus:outline-none">Enviar</button>
            </div>
        </form>

    )
}