import { Day } from '../../../../types/context/context'
import now from '../../../../utils/now'
import timeToHeight from '../../../../utils/timeToHeight'
import timeToNumber from '../../../../utils/timeToNumber'
import TaskCard from './TaskCard'

const DayColumn = ({ logs }: { logs: Day | null }) => {

    const isToday = () => {
        if (logs?.date) {
            const now = new Date().toLocaleDateString('en')
            const logDate = new Date(logs.date).toLocaleDateString('en')
            console.log(now === logDate);

            return now === logDate
        }
        return false
    }

    const style = {
        top: timeToHeight(timeToNumber(now()))
    }

    return (
        <div className='day-column'>
            {isToday() && <>
                <div className='now-head' style={style}></div>
                <div className='now-dial w-11/12' style={style}></div>
            </>}
            {logs && logs.activity.map((e, i) => <TaskCard key={e.date + i} task={e} />)}
        </div>
    )
}

export default DayColumn
