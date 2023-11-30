export type TransactionHistory = {
	id: number,
	userId: number,
	type: string, //Saque | Deposito
	amount: number,
	timestamp: string,
};