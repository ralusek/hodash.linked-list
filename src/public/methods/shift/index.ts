// Types
import { LinkedListState, LinkedListItemContainer } from '../../../types';
import { LinkedListShiftConfig } from './types';


/**
   * Attempts to shift an item off the head of the queue.
   * @param state - The LinkedListState
   * @param config - The shift configuration.
   * @returns T if the shift was possible/allowed.
   */
export default <T>(
  state: LinkedListState<T>,
  {
    batchSize = 1
  }: LinkedListShiftConfig = {}
): T | T[] => {
  const shifted: T[] = [];

  if ((batchSize < 1) || isNaN(batchSize)) return shifted;

  let head: LinkedListItemContainer<T> | null = state.private.head;
  for (let i = 0; i < batchSize && head; i++) {
    shifted.push(head.item);
    head = head.next;
  }

  if (head) state.private.head = head;
  // Queue is empty now, so de-reference head and tail.
  else {
    state.private.head = null;
    state.private.tail = null;
  }

  state.private.length -= batchSize;

  return batchSize > 1 ? shifted : shifted[0];
};
