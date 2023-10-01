import { useState } from "react";
import { Calendar as CalendarComp } from "react-calendar"
import Week from "./Week"

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString('en'))

    const formatDayName = (_: string | undefined, date: Date) => {
        const day = date.getDay()
        const days = ['d', 'l', 'm', 'm', 'j', 'v', 's']
        return days[day]
    }

    const handler = (d: Date): void => {
        const newDate = d.toLocaleDateString('en')
        // cambiar esta fecha trigerea el memo
        setSelectedDate(newDate)

        // si la nueva fecha es de otro mes o año
        // if (isAnotherMonth(date, d)) {
        //     // pedimos la nueva data al back
        //     setSelectedDay(() => false)
        //     // cambiar esta fecha trigerea una request
        //     // al mutar "month" se trigerea el memo
        //     setDate(() => newDate)
        // }
    }

    return (
        <div className="w-screen mt-24">
            <div className="flex gap-4 mx-4">
                <section className="w-64">
                    <h1>Calendar</h1>
                    <CalendarComp onClickDay={handler} locale={'es-Ar'} next2Label={null} prev2Label={null} formatShortWeekday={formatDayName} />
                </section>

                <section className="w-full">
                    <Week date={selectedDate} />
                </section>
            </div>
        </div>
    )
}

export default Calendar