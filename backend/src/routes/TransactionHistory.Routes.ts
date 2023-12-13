import express from 'express';
import TransactionHistoryController from '../controllers/TransactionHistory.Controller';

const transactionHistoryRouter = express.Router();
const transactionHistoryController = new TransactionHistoryController();

transactionHistoryRouter.get("/", transactionHistoryController.getAllTransactionHistorys);

transactionHistoryRouter.get("/:id", transactionHistoryController.getById);

transactionHistoryRouter.post("/", transactionHistoryController.createTransactionHistory);

transactionHistoryRouter.put("/:id", transactionHistoryController.updateTransactionHistory);

transactionHistoryRouter.delete("/:id", transactionHistoryController.deleteTransactionHistory);

transactionHistoryRouter.get("/history/:userId", transactionHistoryController.getByUser);

export default transactionHistoryRouter;
