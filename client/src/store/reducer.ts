import { Store } from 'types';

import defaults from 'store/defaults';
import { actions } from 'store/actions';

//------------------------------------------------------------------------------

export default function reducer(
  state: Store.State = defaults,
  { type, payload }: Store.Action<Store.State>,
) {
  switch (type) {
    case actions.setGardens:
      return {
        ...state,
        gardens: payload.gardens,
      };
    default:
      return state;
  }
}
