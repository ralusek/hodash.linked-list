// Types
import { LinkedListState, LinkedList } from '../types';
import { LinkedListShiftConfig } from './methods/shift/types';

// Public Methods
import push from './methods/push';
import shift from './methods/shift';


/**
 * Bootstraps the state properties and behaviors.
 * @param state The LinkedList state.
 */
export default <T>(
  state: LinkedListState<T>,
): LinkedList<T> => {
  const publicState: LinkedList<T> = {
    get length() { return state.private.length },

    push: (item) => push(state, item),
    shift: (config)=> shift(state, config),
  };

  return publicState;
};
