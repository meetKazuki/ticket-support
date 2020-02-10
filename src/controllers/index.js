import models from '../models';

const { Ticket, Comment } = models;

export default {
  /**
   * @function createTicket
   * @description handles ticket creation
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   *
   * @returns {Object} response object
   */
  createTicket: async (request, response) => {
    const newTicket = await Ticket.create(request.body);
    return response.status(201).json({
      status: 'success',
      message: 'ticket created successfully',
      data: newTicket,
    });
  },
};
