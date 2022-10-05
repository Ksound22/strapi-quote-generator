"use strict";

/**
 *  quote controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::quote.quote", () => ({
  async index(ctx, data, next) {
    let randomNum = Math.floor(Math.random() * data.length);
    // let randomQuote = data[randomNum].attributes;
    // called by GET /hello
    ctx.send({ randomNum });
  },
}));
