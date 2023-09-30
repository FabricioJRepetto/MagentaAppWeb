import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>User Home View</h1>

            <p className="read-the-docs">
                Datos rapidos? Guias? Concejos?
            </p>
            <p className="read-the-docs">
                El bot de Slack
            </p>

            <div className="flex gap-2">
                <button className="w-40" onClick={() => navigate('/app/user')}>Perfil</button>
                <button className="w-40" onClick={() => navigate('/app/calendar')}>Calendario</button>
                <button className="w-40" onClick={() => navigate('/app/charts')}>Estadisticas</button>
            </div>
        </>
    )
}

export default Home