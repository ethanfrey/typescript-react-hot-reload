interface NumState {
    value: number;
}

interface ActionType {
    type: string;
}

// Just count actions for now in attribute called "num"
const mainInitialState: NumState = { value: 0 };

function demoReducer(state = mainInitialState, action: ActionType): NumState {
  if (action.type[0] === "@") { // '@@redux/INIT' action
    return state;
  }
  const value = state.value || 0;
  const nextState = { ...state, value: value + 1 };
  return nextState;
}

export { demoReducer };
