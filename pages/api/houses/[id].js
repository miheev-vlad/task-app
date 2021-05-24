import dbConnect from '../../../utils/dbConnect';
import House from '../../../models/House';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const house = await House.findById(id);
                if (!house) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: house });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    };
};
