import { useState } from 'react';

export default function Courses() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação de criação de curso
        alert('Curso criado com sucesso!');
    };

    return (
        <div className="container">
            <h1>Gerenciar Cursos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título do Curso"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Descrição do Curso"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="number"
                    placeholder="Preço do Curso"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button type="submit">Criar Curso</button>
            </form>
            {/* Aqui você pode adicionar a lógica para listar os cursos do usuário */}
        </div>
    );
}
