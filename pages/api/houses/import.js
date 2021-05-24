import dbConnect from '../../../utils/dbConnect';
import House from '../../../models/House';
const insertData = require('../../../data/houses.js');

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                await House.deleteMany({});
                await House.insertMany(insertData);
                console.log('Data import success');
                res.status(200).json({ success: true });
            } catch (error) {
                console.error('Error with data import: ', error);
                res.status(400).json({ success: false });
            }
            break;
        default:
            break;
    }
}