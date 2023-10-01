/**
 * Determina la fecha del día indicado basandose en la fecha de inicio de la semana.
 * @param start Fecha de inicio de la semana
 * @param day Día de la semana (0 = Lunes)
 * @returns 
 */
export const weekDayDate = (start_date: string, day: number): string => {
    const date = new Date(start_date)
    const newDate = date.setDate(date.getDate() + day)

    return new Date(newDate).toLocaleDateString('en')
}