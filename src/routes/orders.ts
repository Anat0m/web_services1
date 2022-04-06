import * as express from "express";
import { celebrate, Joi, Segments, errors } from 'celebrate';

export const register = ( app: express.Application ) => {
    app.route('/orders')
    .get(( req: any, res ) => {
        res.send( "get all orders" );
    }).post(celebrate({
        [Segments.BODY]: Joi.object().keys({
            customer_name: Joi.string().required(),
            address_line: Joi.string().required(),
            item: Joi.string().required(),
            total_price: Joi.string().required(),
            total_shipping: Joi.string().required(),
            currency: Joi.string().required(),
          }),
    }),(req, res) => {
        res.send('post order')
    });

    app.route('/orders/:id')
    .get(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),(req, res) => {
        res.send('get order')
    })
    .put(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),(req, res) => {
        res.send('put order')
    })
    .delete(celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),(req, res) => {
        res.send('delete order')
    })
    app.use(errors())
};