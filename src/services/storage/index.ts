export const StorageKey = {
  Language: 'Language',
  Authen: 'Authen',
  HistorySearch: 'HistorySearch',
  WishList: 'WishList',
  Cart: 'Cart',
  Phone: 'Phone',
  OrderSuccess: 'OrderSuccess',
  MiniAppVersion: 'MiniAppVersion',
}

export const getDataToStorage = async (key) => {
  const storedData = await JSON.parse(localStorage.getItem(`${key}`) as any);
  return storedData;
};

export const setDataToStorage = async (key, data) => {
  await localStorage.setItem(`${key}`, JSON.stringify(data));
};

export const removeDataToStorage = async (key) => {
  await localStorage.removeItem(`${key}`);
}