import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        // Simulação de ganhos
        setEarnings([
            { course: 'Curso 1', amount: 100 },
            { course: 'Curso 2', amount: 150 }
        ]);
    }, []);

    const handleWithdraw = () => {
        // Simulação de saque de fundos
        alert('Fundos sacados com sucesso!');
    };

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <h2>Seus Ganhos</h2>
            <div>
                {earnings.map((earning, index) => (
                    <div key={index} className="earning">
                        <p>Curso: {earning.course}</p>
                        <p>Valor: R${earning.amount}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleWithdraw}>Sacar Fundos</button>
        </div>
    );
}
