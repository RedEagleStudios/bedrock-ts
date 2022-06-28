/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 *
 * **Note:** This method mutates `target`
 * @param target The target object to copy to.
 * @param source The source object from which to copy properties.
 */
export function assign<T extends object>(target: NonNullable<T>, source: Partial<NonNullable<T>>): NonNullable<T> {
  return Object.assign(target, source)
}
