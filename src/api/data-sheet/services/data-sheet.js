'use strict';

/**
 * data-sheet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-sheet.data-sheet');
