import { postDetail } from "../types/postDetail";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const postDetailState = atom<postDetail>({
  key: "postDetail",
  default: {
    ott: "",
    title: "",
    content: "",
    postImage: null,
  },
  effects_UNSTABLE: [persistAtom],
});
