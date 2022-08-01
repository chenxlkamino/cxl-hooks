/**
 * 抛出异常处理
 * @param condition 条件 
 * @param message 错误信息
 */
export function invariant(condition: any, message: string) {
    if(!condition){
        throw new Error(message);
    }
}
