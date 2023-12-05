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
        yield queryInterface.bulkInsert('bets', [
            {
                id: 1,
                user_id: 1,
                event_id: 1,
                selection: 'non-sei',
                stake: 'non-sei',
                odds: 1,
                status: 'ABC'
            },
            {
                id: 2,
                user_id: 1,
                event_id: 1,
                selection: 'non-sei',
                stake: 'non-sei',
                odds: 1,
                status: 'ABC'
            },
            {
                id: 3,
                user_id: 1,
                event_id: 1,
                selection: 'non-sei',
                stake: 'non-sei',
                odds: 1,
                status: 'ABC'
            },
        ]);
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('bets', {});
    })
};
//# sourceMappingURL=05-bets.js.map