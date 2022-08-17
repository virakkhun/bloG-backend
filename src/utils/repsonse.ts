export const CommonResponse = <DataResponseType = {}>(
  code: number,
  msg: string,
  data: DataResponseType
) => {
  return {
    statusCode: code,
    message: msg,
    data: data,
  }
}
