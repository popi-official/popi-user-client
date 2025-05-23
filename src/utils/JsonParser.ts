export const ParseStringToJson = (string: string) => {
  return JSON.parse(string);
};

export const ParseJsonToString = (object: object) => {
  return JSON.stringify(object);
};
