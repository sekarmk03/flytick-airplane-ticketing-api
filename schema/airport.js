module.exports = {
    createAirport: {
        code: 'string|max:5',
        name: 'string',
        city_id: 'number',
        country_id: 'number',
        maps_link: 'string',
        maps_embed: {type: 'string', optional: true}
    }
}