import { Global, Store } from 'types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setGardens: 'SET_GARDENS'
};

//------------------------------------------------------------------------------

interface GardenPayload {
  readonly gardens: Global.Garden[];
}

interface GardenAction extends Store.Action<GardenPayload> { };

const setGardens = (gardens: Global.Garden[]): GardenAction => {
  return {
    type: actions.setGardens,
    payload: {
      gardens,
    },
  };
}

export const getGardens = () => {
  return (dispatch: any) => {
    window.fetch('/api/gardens').then(response => {
      if (response.status !== 200) {
        console.error('getGardens()', response.status);
        return null;
      } else {
        response.json()
          .then(data => {
            return dispatch(setGardens(data));
          }).catch(e => {
            console.error('getGardens()', response.status);
            return null;
          });
      }
    }).catch(e => {
      console.error('getGardens()', e);
      return null;
    });
  };
}