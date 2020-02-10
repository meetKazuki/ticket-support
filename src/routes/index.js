import { Router } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import ticketController from '../controllers';
import ticketSchema from '../validations';
import validator from '../middleware/validator';

const router = Router();

const {
  createTicket,
} = ticketController;

const {
  createTicketSchema,
} = ticketSchema;

router.post(
  '/tickets',
  validator(createTicketSchema),
  asyncWrapper(createTicket),
);

export default router;
