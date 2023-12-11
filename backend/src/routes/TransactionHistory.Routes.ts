import express, { Request, Response } from 'express';
import TransactionHistoryController from '../controllers/TransactionHistory.Controller';

const transactionHistoryRouter = express.Router();
const transactionHistoryController = new TransactionHistoryController();

transactionHistoryRouter.get("/get-all", transactionHistoryController.getAllTransactionHistorys);

transactionHistoryRouter.get("/:id", transactionHistoryController.getById);

transactionHistoryRouter.post("/create", transactionHistoryController.createTransactionHistory);

transactionHistoryRouter.put("/:id", transactionHistoryController.updateTransactionHistory);

transactionHistoryRouter.delete("/:id", transactionHistoryController.deleteTransactionHistory);

export default transactionHistoryRouter;