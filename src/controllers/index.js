import { NotFoundError } from '../helpers/errors';
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
      message: 'ticket created',
      data: newTicket,
    });
  },

  /**
   * @function createComment
   * @description add comments to ticket
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   *
   * @returns {Object} response object
   */
  createComment: async (request, response) => {
    const { ticketId } = request.params;

    const ticketObject = await Ticket.findByPk(ticketId);
    if (!ticketObject) throw new NotFoundError();

    const comment = { ...request.body };
    const commentData = await Comment.create({ ticketId, ...comment });

    return response.status(201).json({
      status: 'success',
      message: 'comment added',
      data: commentData,
    });
  },

  /**
   * @function getAllTickets
   * @description fetch all tickets
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   *
   * @returns {Object} response object
   */
  getAllTickets: async (request, response) => {
    const tickets = await Ticket.findAll();

    return response.status(200).json({
      status: 'success',
      data: tickets,
    });
  },

  /**
   * @function getOneTicket
   * @description fetch a ticket
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   *
   * @returns {Object} response object
   */
  getOneTicket: async (request, response) => {
    const { ticketId } = request.params;

    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) throw new NotFoundError();

    return response.status(200).json({
      status: 'success',
      data: ticket,
    });
  },

  /**
   * @function updateTicketStatus
   * @description handles ticket status update
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   *
   * @returns {Object} response object
   */
  updateTicketStatus: async (request, response) => {
    const { ticketId } = request.params;

    const ticketObject = await Ticket.findByPk(ticketId);
    if (!ticketObject) throw new NotFoundError();

    const { status } = request.body;
    await Ticket.update(status);

    return response.status(200).json({
      status: 'success',
      message: 'ticket status updated',
    });
  },
};
