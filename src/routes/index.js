import { Router } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import ticketController from '../controllers';
import ticketSchema from '../validations';
import validator from '../middleware/validator';

const router = Router();

const {
  createTicket,
  createComment,
} = ticketController;

const {
  createTicketSchema,
  createCommentSchema,
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

export default router;
