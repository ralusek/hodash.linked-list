// Types
import { LinkedListPrivateState, LinkedListState } from '../types';


/**
 * Bootstraps the state properties and behaviors.
 */
export default <T>(
  state: LinkedListState<T>,
): LinkedListPrivateState<T> => {
  const privateState: LinkedListPrivateState<T> = {
    head: null,
    tail: null,
    length: 0,
  };

  return privateState;
};
