export abstract class Builder<T> {
  protected object: T
  constructor(object: T) {
    this.object = object
  }
  /**
   * **UNSAFE**
   *
   * Overrides the output object, make sure that the new object have matching name or identifier with the new one
   */
  public override(object: T): void {
    this.object = object
  }
  public build(): T {
    return this.object
  }
}
