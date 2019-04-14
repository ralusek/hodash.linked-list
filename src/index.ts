// Types
import { LinkedList, LinkedListState } from './types';

// Bootstrappers.
import bootstrapPrivateState from './private';
import bootstrapPublicState from './public';


/**
 * LinkedList factory function.
 */
export default <T>(
): LinkedList<T> => {
  const built: any = {};

  const state: LinkedListState<T> = {
    get private() { return built.private || (built.private = bootstrapPrivateState(state)); },
    get public() { return built.public || (built.public = bootstrapPublicState(state)); }
  };

  return state.public;
};