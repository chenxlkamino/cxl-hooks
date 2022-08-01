"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = void 0;
/**
 * 抛出异常处理
 * @param condition 条件
 * @param message 错误信息
 */
function invariant(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
exports.invariant = invariant;
