import { Reducer } from "redux";

export interface RootState {
  sample: string;
}

const initialState: RootState = {
  sample: "aaa"
};

export const rootReducer: Reducer<RootState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "sample": {
      debugger;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
