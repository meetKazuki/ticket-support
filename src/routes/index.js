import { Router } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import ticketController from '../controllers';
import ticketSchema from '../validations';
import validator from '../middleware/validator';

const router = Router();

const {
  createTicket,
  createComment,
  getAllTickets,
  getOneTicket,
  updateTicketStatus,
} = ticketController;

const {
  createTicketSchema,
  createCommentSchema,
  updateTicketSchema,
  checkId,
} = ticketSchema;

router.post(
  '/tickets',
  validator(createTicketSchema),
  asyncWrapper(createTicket),
);

router.post(
  '/tickets/:ticketId/comment',
  validator(createCommentSchema),
  asyncWrapper(createComment),
);

router.get(
  '/tickets',
  asyncWrapper(getAllTickets),
);

router.get(
  '/tickets/:ticketId',
  validator(checkId),
  asyncWrapper(getOneTicket),
);

router.patch(
  '/tickets/:ticketId',
  validator(updateTicketSchema),
  updateTicketStatus,
);

export default router;
