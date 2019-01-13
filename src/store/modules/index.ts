import { Reducer, bindActionCreators } from "redux";
import { Action } from "redux";

export interface RootState {
  sample: string;
}

/* ======= Action Creators ======= */
interface SampleAction extends Action {
  type: "sampleAction";
}

export type Actions = SampleAction;

/* ======= Initial State ======= */
export const initialState: RootState = {
  sample: ""
};

/* ======= Reducers ======= */
const reducer: Reducer<RootState | undefined, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "sampleAction": {
      return { ...state };
    }
    default: {
      break;
    }
  }
};

export default reducer;
