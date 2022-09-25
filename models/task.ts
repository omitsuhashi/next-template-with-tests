class Task {
  public children: Array<string>;

  constructor(
    public id: string,
    public name: string,
    public description: string,
    children?: Array<string>,
  ) {
    this.children = children ?? [];
  }

  addChild(childId: string) {
    this.children.push(childId);
  }

  removeChild(childId: string) {
    this.children = this.children.filter((child) => child !== childId);
  }
}

export default Task;
