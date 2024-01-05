const initialState = {
  data: { nodes: [], edges: [] },
  isload: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REQDATA":
      return { ...state, isload: false };

    case "ADDDATA":
      return {
        ...state,
        data: {
          ...state.data,
          nodes: [...state.data.nodes, payload.nodes],
          edges: [...state.data.edges, payload.edges],
        },
        isload: true,
      };

      case "INTDATA":
        return {
          ...state,
          data: {
            ...state.data,
            nodes: [...state.data.nodes, ...payload.nodes],
            edges: [...state.data.edges, ...payload.edges],
          },
          isload: true,
        };
  

    default:
      return state;
  }
};
