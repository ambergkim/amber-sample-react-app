export const DATA_INFLATE = 'DATA_INFLATE';

export function dataInflate(json) {
  return {type: DATA_INFLATE, json};
}