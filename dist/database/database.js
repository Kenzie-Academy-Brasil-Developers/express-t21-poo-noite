"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.gameDatabase = void 0;
exports.gameDatabase = [];
let id = 0;
function generateId() {
    id++;
    return id;
}
exports.generateId = generateId;
