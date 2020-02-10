import { check, param } from 'express-validator';

export default {
  createTicketSchema: [
    check('title')
      .not()
      .isEmpty()
      .withMessage('Provide the title of this ticket'),

    check('ownerName')
      .not()
      .isEmpty()
      .withMessage('Provide your fullname'),

    check('ownerEmail')
      .not()
      .isEmpty()
      .withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .normalizeEmail(),

    check('status')
      .optional()
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Provide the status of this ticket')
      .isIn(['pending', 'resolved'])
      .withMessage('Ticket can only be marked as "pending" or "resolved"'),
  ],

  updateTicketSchema: [
    param('ticketId')
      .isUUID(4)
      .withMessage('Invalid ticket ID'),

    check('status')
      .optional()
      .trim()
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Provide the status of this ticket')
      .isIn(['pending', 'resolved'])
      .withMessage('Ticket can only be marked as "pending" or "resolved"'),
  ],

  createCommentSchema: [
    param('ticketId')
      .isUUID(4)
      .withMessage('Invalid ticket ID'),

    check('author')
      .not()
      .isEmpty()
      .withMessage('Provide your fullname'),

    check('comment')
      .not()
      .isEmpty()
      .withMessage('Comment cannot be empty. Enter your comment'),
  ],

  checkId: [
    param('ticketId')
      .isUUID(4)
      .withMessage('Invalid ticket ID'),
  ],
};
