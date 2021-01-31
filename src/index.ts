import { flow, flattenDeep, uniq, orderBy } from 'lodash';

const list = [1, 2, 3, 2, [5, [4, 1]]];

export const flattenUniqOrderBy = flow(
  flattenDeep,
  uniq,
  orderBy,
);

console.log(flattenUniqOrderBy(list));
