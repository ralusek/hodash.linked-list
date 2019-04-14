import { LinkedListShiftConfig } from './public/methods/shift/types';

export type LinkedListState<T> = {
  private: LinkedListPrivateState<T>,
  public: LinkedList<T>,
};

export type LinkedList<T> = {
  length: number,
  /**
   * Push an item into the tail of the queue O(1)
   * @param item - The item to push into the queue.
   * @returns - The T for the Item that was added to the queue.
   */
  push: (item: T) => T,
  /**
   * Attempts to shift an item off the head of the queue.
   * O(M), where M is the amount of items removed.
   * @returns T if the shift was possible/allowed.
   */
  shift: (config?: LinkedListShiftConfig) => T | T[]
};

/**
 * The private namespace for instances of LinkedList
 */
export type LinkedListPrivateState<T> = {
  /** The first item in the queue. Will be replaced by the next item in the event of a .shift() */
  head: LinkedListItemContainer<T> | null,
  /** The last item in the queue. Will be replaced by a new item in the event of a .push() */
  tail: LinkedListItemContainer<T> | null,
  /** The length of the queue. */
  length: number,
};


/**
 * A container for a T for facilitating linked list implementation
 */
export type LinkedListItemContainer<T> = {
  item: T,
  next: LinkedListItemContainer<T> | null,
};
