export const sum = (a: number, b: number) => {
  return a + b;
};

/**
 * 抛出异常处理
 * @param condition 条件
 * @param message 错误信息
 */
export const invariant = (condition: any, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};
