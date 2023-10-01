import { useContext } from 'react'
import { GlobalContextType } from '../../../../types/context/context'
import { GlobalContext } from '../../../../infra/context/GlobalContext'
import userIcon from "../../../../assets/icons/user.svg";

const ConfigPanel = () => {
    const { user, config, logout } = useContext(GlobalContext) as GlobalContextType

    return (
        <>
            <div className='flex justify-center my-8'>
                <img src={user?.picture || userIcon} alt="profile picture" className="h-24 w-24 rounded-full" style={{ border: "3px solid var(--magenta)" }} />
            </div>
            <div className='p-10 border border-neutral-500 grid grid-cols-2 gap-2 rounded-md'>

                <p>Name:</p>
                <b>{user?.name}</b>

                <p>Email:</p>
                <b>{user?.email}</b>

                <p>Role:</p>
                <b>{user?.role}</b>

                <p>id:</p>
                <b>{user?._id}</b>

                <p>google_id:</p>
                <b>{user?.google_id}</b>

                <p>slack_id:</p>
                <b>{user?.slack_id}</b>

                <p>Active days:</p>
                <b>{config?.active_days}</b>

                <p>Active hours:</p>
                <b>{config?.active_hours.from}-{config?.active_hours.to}</b>

                <p>Time between notifications:</p>
                <b>{config?.reminder_time}</b>

                <p>Active notifications:</p>
                <b>{config?.notification ? 'Yes' : 'No'}</b>
            </div>

            <div className='flex justify-end mt-8'>
                <button onClick={logout}>log out</button>
            </div>
        </>
    )
}

export default ConfigPanel

/*
    email: string
    name: string
    picture: string | undefined
    role: string
    _id: string
    google_id: string;
    slack_id?: string;
*/