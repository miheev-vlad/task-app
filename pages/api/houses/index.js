import dbConnect from '../../../utils/dbConnect';
import House from '../../../models/House';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const houses = await House.find({});
                res.status(200).json({ success: true, data: houses });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
        try {
            const { title, description } = req.body;
            const house = new House({title, description});
            const newHouse = await House.save();
            res.status(201).json({ success: true, data: newHouse });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        default:
            res.status(400).json({ success: false });
            break;
    };
};
