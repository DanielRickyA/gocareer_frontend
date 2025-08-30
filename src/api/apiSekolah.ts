import type { AxiosError } from "axios";
import useAxios from "..";
import type { ApiError, ApiResponse } from "./type";

export async function getSekolah(
  kabupatenId?: number
): Promise<ApiResponse<SekolahResponseModel[]>> {
  try {
    const response = await useAxios.get(`/sekolah`, {
      params: { kabupatenId },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw {
      message: axiosError.response?.data?.message || "Terjadi kesalahan!",
      data: null,
    } as ApiError;
  }
}

export interface SekolahModel {
  id: number;
  nama: string;
}

export interface SekolahResponseModel {
  kabupaten: string;
  sma: SekolahModel[];
  smk: SekolahModel[];
}
