import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      // baseURL: process.env.BASE_URL,
      baseURL: "api/",
    });
  }

  private preProcess(obj: any): any {
    return obj;
  }

  /**
   * Perform a POST request.
   * @param {string} url - The URL for the POST request.
   * @param {string|Object} data - The data to be sent in the request.
   * @param {AxiosRequestConfig} config - Additional configuration for the request.
   * @returns {Promise<AxiosResponse>} - A Promise that resolves to the response.
   */
  public async post(
    url: string,
    data: string | object,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    try {
      const res = await this.instance.post(url, this.preProcess(data), config);
      return res;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Perform a GET request.
   * @param {string} url - The URL for the GET request.
   * @param {string|Object} data - The data to be sent in the request.
   * @param {AxiosRequestConfig} config - Additional configuration for the request.
   * @returns {Promise<AxiosResponse>} - A Promise that resolves to the response.
   */
  public async get(url: string, data: string | object): Promise<AxiosResponse> {
    try {
      const res = await this.instance.get(url, this.preProcess(data));
      return res;
    } catch (err) {
      throw err;
    }
  }
}

const httpService = new HttpService();
export default httpService;
