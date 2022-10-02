import { CommonMessage } from "./message"
import { StatusCode } from "./statusCode"

export const CommonResponse = <DataResponseType = {}>({
  code,
  msg,
  data,
}: {
  code: StatusCode
  msg: CommonMessage
  data: DataResponseType
}) => {
  return {
    statusCode: code,
    message: msg,
    data: data,
  }
}
