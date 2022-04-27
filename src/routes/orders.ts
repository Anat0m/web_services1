import * as express from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';
import { AppDataSource } from "../data-source";
import { Order, OrderCurrency, OrderState } from "../entities/order.entity";

export const register = ( app: express.Application ) => {

    const ordersRepo = AppDataSource.getRepository(Order)

    app.route('/orders')
    .get(async ( req: any, res ) => {
        const users = await ordersRepo.find()
        res.status(200).send(users);
    }).post(celebrate({
        [Segments.BODY]: Joi.object().keys({
            customer_name: Joi.string().required(),
            address_line: Joi.string().required(),
            item: Joi.string().required(),
            total_price: Joi.number().required(),
            total_shipping: Joi.number().required(),
            currency: Joi.any().valid(...Object.values(OrderCurrency)),
          }),
    }),async (req, res) => {
        const savedUser = await ordersRepo.save(req.body)
        res.status(201).location(`/orders/${savedUser.id}`).send(savedUser);
    });

    app.route('/orders/:id')
    .get(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().guid({ version : 'uuidv4' }).required(),
        }),
    }),async (req, res) => {
        const user = await ordersRepo.findOneBy({id: req.params.id})
        if (user === null) {
            res.status(404).send({error: `Order with id ${req.params.id} not found`})
        } else {
            res.status(200).send(user);
        }
    })
    .put(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().guid({ version : 'uuidv4' }).required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            customer_name: Joi.string(),
            address_line: Joi.string(),
            item: Joi.string(),
            total_price: Joi.number(),
            total_shipping: Joi.number(),
            currency: Joi.any().valid(...Object.values(OrderCurrency)),
            state: Joi.any().valid(...Object.values(OrderState)),
          }),
    }),async (req, res) => {
        const user = await ordersRepo.findOneBy({id: req.params.id})
        if (user === null) {
            res.status(404).send({error: `Order with id ${req.params.id} not found`})
        } else {
            const update = {...user, ...req.body}
            const updatedUser = await ordersRepo.save(update)
            res.status(200).location(`/orders/${user.id}`).send(updatedUser)
        }
    })
    .delete(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().guid({ version : 'uuidv4' }).required(),
        }),
    }),async (req, res) => {
        const user = await ordersRepo.findOneBy({id: req.params.id})
        console.log(user)
        if (user === null) {
            res.status(404).send({error: `Order with id ${req.params.id} not found`})
        } else {
            await ordersRepo.delete(user);
            res.status(204).send()
        }
    })
    app.use(errors())
};