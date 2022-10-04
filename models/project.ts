import ProjectDao from '../dao/project';
import TaskModel from './task';
import { UnregisteredObjectError } from '../constants/error';

class ProjectModel {
  private id?: string;
  public tasks: Array<TaskModel> = [];
  constructor(public name: string, public description: string) {}

  static fromDao(dao: ProjectDao): ProjectModel {
    const model = new ProjectModel(dao.name, dao.description);
    model.id = dao.id;
    return model;
  }

  serialize(): ProjectDao {
    const taskIds = this.tasks.map((task) => task.id);
    if (taskIds.some((taskId) => taskId === undefined)) {
      throw new UnregisteredObjectError(
        'register task before adding to project',
      );
    }
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      taskIds: taskIds as Array<string>,
    };
  }
}

export default ProjectModel;
