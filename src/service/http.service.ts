/* eslint-disable no-unused-vars */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadRequest = 400,
  SuccessOk = 200,
  SuccessCreated = 201,
  NotAllowed = 405,
}

class Http {
  private instance: AxiosInstance | null = null;
  private headers: Readonly<Record<string, string | boolean>> = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  private get http(): AxiosInstance {
    return this.instance ?? this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: 'https://api.example.com',
      headers: this.headers,
    });

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      },
    );

    this.instance = http;
    return http;
  }

  setHeaders(newHeaders: Record<string, string | boolean>): void {
    this.headers = { ...this.headers, ...newHeaders };
    this.instance = null; // Reset instance to apply new headers
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: { data?: any; status?: any; }) {
    const response = {
      statusCode: error?.status,
      error: error?.data,
    };
    switch (error.status) {
      case StatusCode.InternalServerError: {
        return response;
      }
      case StatusCode.Forbidden: {
        return response;
      }
      case StatusCode.Unauthorized: {
        return response;
      }
      case StatusCode.TooManyRequests: {
        return response;
      }
      case StatusCode.BadRequest: {
        return response;
      }
      case StatusCode.SuccessOk: {
        return response;
      }
      case StatusCode.SuccessCreated: {
        return response;
      }
      case StatusCode.NotAllowed: {
        return response;
      }
    }
    return Promise.reject(error);
  }
}

export const httpClient = new Http();
