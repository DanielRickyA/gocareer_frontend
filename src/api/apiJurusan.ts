import type { AxiosError } from "axios";
import useAxios from "..";
import type { ApiError, ApiResponse } from "./type";

export async function getJurusan(): Promise<
  ApiResponse<JurusanResponseModel[]>
> {
  try {
    const response = await useAxios.get(`/jurusan`, {});
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw {
      message: axiosError.response?.data?.message || "Terjadi kesalahan!",
      data: null,
    } as ApiError;
  }
}

export async function getItemJurusan(
  id: number
): Promise<ApiResponse<SubJurusanResponseModel[]>> {
  try {
    const response = await useAxios.get(`/jurusan/${id}/item`, {});
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw {
      message: axiosError.response?.data?.message || "Terjadi kesalahan!",
      data: null,
    } as ApiError;
  }
}

export type JurusanResponseModel = {
  id: number;
  nama: string;
  tipe_sekolah: "sma" | "smk";
};

export type SubJurusanResponseModel = {
  id: number;
  id_jurusan: number;
  nama: string;
  youtube: string;
};
