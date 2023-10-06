import { useNavigate } from 'react-router-dom';

const AppHome = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Dashboard Home View</h1>
            <h1>WIP</h1>
            <b className='text-2xl my-8'><a href='https://join.slack.com/t/magentaproduc-dqe3450/shared_invite/zt-22zcuxzs1-JVymFP7FG8NWmFktqpCrRw' target='_blank'>Slack</a></b>

            <div className="flex justify-center gap-2">
                <button className="w-40" onClick={() => navigate('/app/calendar')}>Calendario</button>
                <button className="w-40" onClick={() => navigate('/app/charts')}>Estadisticas</button>
            </div>
        </>
    )
}

export default AppHome