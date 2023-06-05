import { useQuery } from "react-query";
import { TechElementType } from "@component/typings";

export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(
    `https://portfolio-api-production-2977.up.railway.app/${url}`
  );
  return await response.json();
}

export const useGetData = <T>(name: string) =>
  useQuery([name], () => fetcher<T>(name));
