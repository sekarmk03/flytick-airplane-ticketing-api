module.exports = {
    createSchedule: {
        flight_id: { type: 'number', positive: true, integer: true },
        cost: { type: 'number', positive: true, integer: true },
        departure_time: 'string',
        arrival_time: 'string',
        from_airport: { type: 'number', positive: true, integer: true },
        to_airport: { type: 'number', positive: true, integer: true },
    },
    updateSchedule: {
        flight_id: { type: 'number', positive: true, integer: true },
        cost: { type: 'number', positive: true, integer: true },
        departure_time: 'string',
        arrival_time: 'string',
        from_airport: { type: 'number', positive: true, integer: true },
        to_airport: { type: 'number', positive: true, integer: true },
        passenger: { type: 'number', positive: true, integer: true }
    },
}