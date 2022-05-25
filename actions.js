export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_DATA: 'LOAD_DATA',
}

export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}


export function loadData() {
  return { type: actionTypes.LOAD_DATA }
}
