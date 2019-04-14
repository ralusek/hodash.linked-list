// Types
import { LinkedListState } from '../../../types';


/**
 * Push an item into the tail of the queue O(1)
 * @param state - The LinkedList state.
 * @param item - The item to push into the queue.
 * @returns - The T for the Item that was added to the queue.
 */
export default <T>(
  state: LinkedListState<T>,
  item: T,
): T => {
  state.private.length++;

  const previousTail = state.private.tail;
  const newItem = {item, next: null};

  state.private.tail = newItem;

  if (previousTail) previousTail.next = newItem;
  // Queue was empty, so new item is also the head
  else state.private.head = newItem;

  return newItem.item;
};
