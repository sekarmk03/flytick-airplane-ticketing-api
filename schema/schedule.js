module.exports = {
    createSchedule: {
        flight_id: 'number',
        cost: 'number',
        departure_time: 'string',
        arrival_time: 'string',
        from_airport: 'number',
        to_airport: 'number',
    },
    updateSchedule: {
        flight_id: 'integer',
        cost: 'integer',
        departure_time: 'string',
        arrival_time: 'string',
        from_airport: 'integer',
        to_airport: 'integer',
        passenger: 'integer'
    },
}