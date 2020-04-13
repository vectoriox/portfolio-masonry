export enum StatusCode {
    OK,
    CREATED,
    ACCEPTED,
    NO_CONTENT,
    NOT_MODIFIED,
    UNAUTHORIZED,
    PRECONDITION_FAILED,
    UNEXPECTED_ERROR,
    RESOURCE_NOT_FOUND,
    PROVIDER_ERROR,
    PROVIDER_UNAVAILABLE,
    CONFLICT,
    BAD_REQUEST,
    REQUEST_ABORTED,
    REQUEST_TIMEOUT,
    UNPROCESSABLE_ENTITY,
    FORBIDDEN,
    METHOD_NOT_ALLOWED,
    UNSUPPORTED_MEDIA_TYPE,
    TOO_MANY_REQUESTS,
    GONE
  }

export enum HTTPResponseCode {
    // $http error codes
    CLIENT_ABORTED = -1,
    CLIENT_TIMEOUT = 0,
    // native HTTP error codes
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    NOT_MODIFIED = 302,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    PRECONDITION_FAILED = 412,
    CONFLICT = 409,
    GONE = 410,
    UNSUPPORTED_MEDIA_TYPE = 415,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503
  }

  export interface IResponse {
    statusCode: StatusCode;
    error: any;
  }

  export interface HeaderObject {
    [name: string]: string;
  }
  
  export interface BaseResponse<T> extends IResponse {
    result: T;
    notice: string;
    headers: HeaderObject;
    originalResponse?: any;
    body?: string;
  }