const {Ticket, Schedule, Airport, Country} = require('../models');

module.exports = {
    country: async (req, res, next) => {
        try {
            let data = [];
            
            const countryData = await Country.findAll({raw: true});
            
            const ticketData = await Ticket.findAll({
                include: {
                    model: Schedule,
                    as: 'schedule',
                    include: {
                        model: Airport,
                        as: 'toAirport'
                    }
                }
            });

            // console.log(ticketData);

            countryData.forEach(async (country) => {
                const countryData = {};
                countryData.name = country.name;
                const buyer = ticketData.filter(dt => dt.schedule.toAirport.country_id == country.id);
                countryData.buyer = buyer.length;
                countryData.income = 0;
                buyer.forEach((b) => {
                    countryData.income += b.schedule.cost;
                });
                data.push(countryData);
            });

            return res.status(200).json({
                message: 'success',
                data
            });
        } catch (err) {
            next(err);
        }
    }
};