import express from "express";
import itemsModel from "../Models/items";
import auth, {RequestWithUser} from "../middleware/auth";
import items from "../Models/items";

const itemsRouter = express.Router();

itemsRouter.get('/', async  (req, res, next) => {
    try {
        const item = await itemsModel.find();
        return res.send(item);
    } catch (e) {
        next(e)
    }
});

itemsRouter.post('/add-item',  auth , async (req: RequestWithUser, res, next) => {
    try {
        const item = new itemsModel({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price
        });
        item.username(req.user?.username);
        item.phone(req.user?.phoneNumber)

        await item.save();

        return res.send({ message : 'item added',item});
    } catch (e) {
        next(e)
    }
});

export default itemsRouter