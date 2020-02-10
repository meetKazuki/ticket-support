import { Router } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import ticketController from '../controllers';
import ticketSchema from '../validations';
import validator from '../middleware/validator';

const router = Router();

const {
  createTicket,
  createComment,
  updateTicketStatus,
} = ticketController;

const {
  createTicketSchema,
  createCommentSchema,
  updateTicketSchema,
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

router.patch(
  '/tickets/:ticketId',
  validator(updateTicketSchema),
  updateTicketStatus,
);

export default router;
