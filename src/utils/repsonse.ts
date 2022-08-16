export const CommonResponse = (code: number, msg: string, data: any) => {
  return {
    statusCode: code,
    message: msg,
    data: data,
  }
}
