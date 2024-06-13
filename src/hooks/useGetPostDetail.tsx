import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { postDetailType } from "../types/postDetail";

const useGetPostDetail = (postId: string) => {
  const { data } = useSWR<AxiosResponse<postDetailType>>(
    `api/v1/post/detail/${+postId}`,
    waffleFetcher,
  );

  return {
    postDetailData: data?.data,
  };
};

export default useGetPostDetail;