import { atom } from "recoil";
import { CartList } from "../types/CartList";
const CartAList = atom<CartList[]>({
  key: "CartList",
  default: [],
});
const CartNum = atom<number>({
  key: "CartNum",
  default: 0,
});

export { CartAList, CartNum };
