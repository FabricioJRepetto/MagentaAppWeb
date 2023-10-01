import { useContext } from "react";
import { GlobalContext } from "../../../../infra/context/GlobalContext";
import { Day, GlobalContextType } from "../../../../types/context/context";
import DayColumn from './DayColumn'
import { defineWeek } from "../../../../utils/defineWeek";
import { weekDayDate } from "../../../../utils/weekDayDate";
import findDayLogs from "../../../../utils/findDayLogs";


const Week = ({ date }: { date: string }) => {
    const { logs } = useContext(GlobalContext) as GlobalContextType;

    const hours = (): string[] => {
        const hours: string[] = [];

        for (let i = 0; i < 24; i++) {
            hours.push(i <= 12 ? `${i} AM` : `${i - 12} PM`)
        }
        return hours;
    }

    const dayName = (n: number): string => {
        const days = [
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
            "Domingo"
        ]
        return days[n]
    }

    const days = (): string[] => {
        const days: string[] = [''];

        for (let i = 0; i < 7; i++) {
            days.push(`${dayName(i)}`)
        }
        return days;
    }

    const getLogs = (): (Day | null)[] => {
        const days: (Day | null)[] = []
        const { start } = defineWeek(date)

        if (logs?.entries) {
            for (let i = 0; i < 7; i++) {
                const logDate = weekDayDate(start, i)
                const log = findDayLogs(logDate, logs.entries)
                days.push(log)
            }
        }
        return days
    }

    return (
        <>
            <div className='week-container-days'>
                {days().map((day, i) => <span key={day + i}>{i > 0 ? day : ''}</span>)}
            </div>

            <div className='week-container'>
                <div className='week-hours-column'>
                    {hours().map((hour, i) => <span key={'' + hour + i}>{i > 0 ? hour : ''}</span>)}
                </div>
                {logs?.entries && getLogs().map((log, i) => <DayColumn key={'day' + i} logs={log} />)}
            </div>
        </>
    )
}

export default Week