import axios from "./axios";
import { GetDeleteRequestPayloadI, PostPutPatchRequestPayloadI } from "./types";

// GET
export const getRequest = async ({ url, thunkApi, params = {} }: GetDeleteRequestPayloadI) => {
  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};

// POST
export const postRequest = async ({ url, thunkApi, data = {}, params = {} }: PostPutPatchRequestPayloadI) => {
  try {
    const res = await axios.post(url, data, { params });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};
export const postFormDataRequest = async ({ url, thunkApi, data = {}, params = {} }: PostPutPatchRequestPayloadI) => {
  try {
    const res = await axios.post(url, data, {
      params,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};

// PATCH
export const patchRequest = async ({ url, thunkApi, data = {}, params = {} }: PostPutPatchRequestPayloadI) => {
  try {
    const res = await axios.patch(url, data, { params });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};
export const patchFormDataRequest = async ({ url, thunkApi, data = {}, params = {} }: PostPutPatchRequestPayloadI) => {
  try {
    const res = await axios.patch(url, data, {
      params,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};

// PUT
export const putRequest = async ({ url, thunkApi, data = {}, params = {} }: PostPutPatchRequestPayloadI) => {
  try {
    const res = await axios.put(url, data, { params });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};

// DELETE
export const deleteRequest = async ({ url, thunkApi, params = {} }: GetDeleteRequestPayloadI) => {
  try {
    const res = await axios.delete(url, { params });
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  };
};