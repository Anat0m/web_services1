"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const celebrate_1 = require("celebrate");
const register = (app) => {
    app.route('/orders')
        .get((req, res) => {
        res.send("get all orders");
    }).post((0, celebrate_1.celebrate)({
        [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
            customer_name: celebrate_1.Joi.string().required(),
            address_line: celebrate_1.Joi.string().required(),
            item: celebrate_1.Joi.string().required(),
            total_price: celebrate_1.Joi.string().required(),
            total_shipping: celebrate_1.Joi.string().required(),
            currency: celebrate_1.Joi.string().required(),
        }),
    }), (req, res) => {
        res.send('post order');
    });
    app.route('/orders/:id')
        .get((0, celebrate_1.celebrate)({
        [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
            id: celebrate_1.Joi.string().required(),
        }),
    }), (req, res) => {
        res.send('get order');
    })
        .put((0, celebrate_1.celebrate)({
        [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
            id: celebrate_1.Joi.string().required(),
        }),
    }), (req, res) => {
        res.send('put order');
    })
        .delete((0, celebrate_1.celebrate)({
        [celebrate_1.Segments.PARAMS]: celebrate_1.Joi.object().keys({
            id: celebrate_1.Joi.string().required(),
        }),
    }), (req, res) => {
        res.send('delete order');
    });
    app.use((0, celebrate_1.errors)());
};
exports.register = register;
//# sourceMappingURL=orders.js.map