module.exports = {
    createSchedule: {
        flight_id: 'integer',
        cost: 'integer',
        departure_time: 'string',
        arrival_time: 'string',
        from_airport: 'integer',
        to_airport: 'integer',
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