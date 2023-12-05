"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('transaction_histories', [
            {
                id: 1,
                user_id: 1,
                type: 'a',
                amount: 1,
                timestamp: 'non-sei',
            },
            {
                id: 2,
                user_id: 1,
                type: 'a',
                amount: 1,
                timestamp: 'non-sei',
            },
            {
                id: 3,
                user_id: 1,
                type: 'a',
                amount: 1,
                timestamp: 'non-sei',
            },
        ]);
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('transaction_histories', {});
    })
};
//# sourceMappingURL=06-transactionhistories.js.map