export * from "./apiConfig";

import { axiosInstance } from "@/plugins/axios";
import { useCommonStore } from "@/stores";

export const processMiddlewareSendRequest = async ({
  endpoint = "",
  method = "GET",
  body = {},
}) => {
  try {
    useCommonStore.getState().setIsLoading(true);
    const resp = await sendServerRequest({
      endpoint,
      method,
      body,
    });
    return resp;
  } catch (error) {
    throw error;
  } finally {
    useCommonStore.getState().setIsLoading(false);
  }
};

export const sendServerRequest = async ({
  endpoint = "",
  method = "",
  body = {},
}) => {
  try {
    const resp = await axiosInstance.request({
      url: endpoint,
      method,
      ...{
        [method === "GET" ? "params" : "data"]: body,
      },
    });

    if (!resp.data) throw resp;
    return resp.data;
  } catch (error) {
    throw error;
  }
};
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
interface SendFormDataParams {
  endpoint: string;
  method: HttpMethod;
  body: FormData | Record<string, any>;
}
export const sendFormData = async ({
  endpoint = "",
  method = "POST",
  body,
}: SendFormDataParams) => {
  try {
    const resp = await axiosInstance.request({
      url: endpoint,
      method,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!resp.data) throw resp;
    return resp.data;
  } catch (error) {
    throw error;
  }
};
