/**
 * Dado un horario, determina una altura en pixeles.
 * Teniendo en cuenta que la altura máxima del contenedor es de *1200px*,
 * la altura de cada hora es *50px* (1200/24)
 * 
 * @param time horario expresado en decimales
 * @example 14:25 => 14.25
 * @returns La altura en pixeles en formato string
 */
export default (time: number): number => {
    const hUnit = 50;
    const tHour = Math.floor(time);
    const tMin = (time - tHour);

    const hHeight = hUnit * tHour;
    const mHeight = Math.round(hUnit * (tMin * 100 / 60));

    return hHeight + mHeight
}