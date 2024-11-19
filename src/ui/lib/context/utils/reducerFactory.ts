/* eslint-disable @typescript-eslint/no-explicit-any */

const reducerFactory = (state: object, action: any, handlers: any) => {
  const handler = handlers[action.type];

  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default reducerFactory;
