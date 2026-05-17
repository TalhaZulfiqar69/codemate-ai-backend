interface ResponseObject {
  success: boolean;
  message: string;
  status: number;
  data: any;
}

class ResponseHelper {
  static getResponse(
    success: boolean = false,
    message: string = "Error",
    data: any = {},
    statusCode: number = 400
  ): ResponseObject {
    return {
      success: success,
      message: message,
      status: statusCode,
      data: data,
    };
  }
}

export default ResponseHelper;
