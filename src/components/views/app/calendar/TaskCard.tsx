import { useState } from 'react'
import { Activity } from '../../../../types/context/context'
import numberToTime from '../../../../utils/numberToTime';
import timeToHeight from '../../../../utils/timeToHeight';


const TaskCard = ({ task }: { task: Activity }) => {
    const [hover, setHover] = useState<boolean>(false)

    const {
        hours: {
            from,
            to
        },
        description,
        category,
        subcategory,
        energy,
        emotion
    } = task;

    const bgColor = (category: string): string => {
        switch (category) {
            case 'PRODUCTIVIDAD':
                return "#8E24AA"

            case 'OCIO':
                return "#F6BF26"

            case 'DESCANSO':
                return "#039BE5"

            case 'AUTOCUIDADO':
                return "#0B8043"

            case 'INPRODUCTIVIDAD':
                return "#D50000"

            default:
                return "#039BE5"
        }
    }

    const style = {
        top: timeToHeight(from) + 1 + 'px',
        height: timeToHeight(to - from) - 2 + 'px',
        backgroundColor: bgColor(category)
    }

    return (
        <div className={`absolute w-11/12 rounded-md text-left pl-1 ${hover ? 'z-10' : ''}`}
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <p>🕑{numberToTime(from)} - {numberToTime(to)}</p>
            {hover &&
                <>
                    <p>🗒️{description}</p>
                    <p>📊{category.toLowerCase()}</p>
                    <p>{subcategory.toLowerCase()}</p>
                    <p>⚡{energy}</p>
                    <p>💖{emotion}</p>
                </>}
        </div>
    )
}

export default TaskCard