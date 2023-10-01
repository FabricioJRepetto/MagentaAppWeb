import { Day } from '../../../../types/context/context'

const DayColumn = ({ logs }: { logs: Day | null }) => {

    return (
        <div className='day-column'>
            {logs && logs.activity.map((e, i) => <div key={e.date + i} className='border-t border-t-slate-600 mb-2 bg-slate-800 rounded-md'>
                <p>🕑{e.hours.from}-{e.hours.to}</p>
                <p>🗒️{e.description}</p>
                <p>📊{e.category.toLowerCase()}/{e.subcategory.toLowerCase()}</p>
                <p>⚡{e.energy}</p>
                <p>💖{e.emotion}</p>
            </div>)}
        </div>
    )
}

export default DayColumn
