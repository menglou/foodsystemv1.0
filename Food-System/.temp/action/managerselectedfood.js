import { ADDCHANGESELECTEDFOOD, MINUSCHANGESELECTEDFOOD, SELECTEDADDCHANGESELECTEDFOOD, SELECTEDMINUSCHANGESELECTEDFOOD, CLEARCHANGESELECTEDFOOD, ISDISPLAYSELECTEDFOODVIEW } from '../constants/managerselectedfood';

//加
export const addchangeselectedmeal = e => {
  return {
    type: ADDCHANGESELECTEDFOOD,
    index: e
  };
};

//减
export const minuschangeselectedmeal = e => {
  return {
    type: MINUSCHANGESELECTEDFOOD,
    index: e
  };
};
//已选中的加
export const selectedaddchangeselectedmeal = e => {
  return {
    type: SELECTEDADDCHANGESELECTEDFOOD,
    index: e
  };
};

//已选中的减
export const selectedminuschangeselectedmeal = e => {
  return {
    type: SELECTEDMINUSCHANGESELECTEDFOOD,
    index: e
  };
};
//清空
export const clearchangeselectedmeal = () => {
  return {
    type: CLEARCHANGESELECTEDFOOD
  };
};

export const displayselectdfoodview = e => {
  return {
    type: ISDISPLAYSELECTEDFOODVIEW,
    isdiplay: e
  };
};