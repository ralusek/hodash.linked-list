// Types
import { LinkedList, LinkedListState } from './types';

// Bootstrappers.
import bootstrapPrivateState from './private';
import bootstrapPublicState from './public';


/**
 * LinkedList factory function.
 */
export default <T>(
  values?: T[],
): LinkedList<T> => {
  const built: any = {};

  const state: LinkedListState<T> = {
    get private() { return built.private || (built.private = bootstrapPrivateState(state)); },
    get public() { return built.public || (built.public = bootstrapPublicState(state)); }
  };

  values && values.forEach(value => state.public.push(value));

  return state.public;
};
