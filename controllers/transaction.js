const {Transaction, Schedule, Ticket} = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            let {sort="createdAt", type="DESC"} = req.query;
            const transactions = await Transaction.findAll({order:[[sort,type]]});
            return res.status(200).json({
                status: true,
                message: 'get all transaction success',
                data: transactions
            });
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const {biodataId} = req.params;
            const biodata = await Biodata.findOne({where: {id: biodataId}});
            if(!biodata) {
                return res.status(400).json({
                    status: false,
                    message: 'biodata not found',
                    data: null
                });
            }
            return res.status(200).json({
                status: true,
                message: 'get biodata success',
                data: biodata.get()
            });
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const {user_id, schedule_id, adult, child, round_trip} = req.body;

            for (let i = 0; i < schedule_id.length; i++) {
                // generate invoice number
                let invoice_number = (Date.now().toString(36) + '-' + Math.random().toString(36).slice(2)).toUpperCase();
                // set paid_status auto true
                const paid_status = true;
                // search cost of the schedule
                const cost = await Schedule.findOne({where: {id: schedule_id[i]}});
                const total_cost = (adult * cost) + (child * (cost * 0.2)); // child 80%

                const newTransaction = await Transaction.create({
                    transaction_time: new Date(),
                    invoice_number,
                    user_id,
                    // schedule_id,
                    paid_time: new Date(),
                    paid_status,
                    adult,
                    child,
                    round_trip,
                    total_cost
                });

                // generate ticket
                for(let i = 0; i < adult.length; i++) {
                    // new biodata
                    

                    // generate qr
                    const newTicket = await Ticket.create({
                        type: 'Adult',
                        schedule_id: schedule_id[0],
                        user_id,
                        biodata_id,
                        transaction_id: newTransaction.id,
                        checked_in: false,
                        qr_code
                    });
                }
            }

            

            return res.status(201).json({
                status: true,
                message: 'transaction created',
                data: newTransaction
            });
        } catch (err) {
            next(err);
        }
    },
}