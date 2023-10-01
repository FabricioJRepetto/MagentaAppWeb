export interface weekDates {
    start: string;
    end: string;
}

/**
 * Define las fechas de inicio y final de la semana en curso de una determinada fecha.
 * (Se toma al Lunes como primer día de la semana)
 * 
 * @param d Fecha en formato string
 * @returns 
 */
export const defineWeek = (d: string): weekDates => {
    // convierto la String a Date
    const date = new Date(d),
        // averiguo el numero del dia (7 si es Domingo)
        day = (date.getDay() === 0) ? 7 : date.getDay(),
        // averiguo el Lunes de esa semana
        firstDay = date.getDate() - (day - 1),
        // everiguo el Domingo de esa semana y convierto a Date
        lastDay = new Date(new Date(d).setDate(firstDay + 6)).toLocaleDateString('en'),
        // utilizo el numero del Lunes para generar nuevo Date
        start = new Date(new Date(d).setDate(firstDay)).toLocaleDateString('en'),
        // fecha de Domingo lista, cambio nombre
        end = lastDay;
    //: no creo fecha del Lunes en primera instancia porque necesito el numero para saber la fecha del Domingo

    return {
        start,
        end
    }
}