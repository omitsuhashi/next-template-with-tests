class Task {
  constructor(
    private id: string,
    public name: string,
    public description: string,
    private children: Array<string>,
  ) {}

  addChild(childId: string) {
    this.children.push(childId);
  }

  removeChild(childId: string) {
    this.children = this.children.filter((child) => child !== childId);
  }
}

export default Task;
