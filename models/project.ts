import ProjectDao from '../dao/project';

class ProjectModel {
  private id?: string;
  constructor(public name: string, public description: string) {}

  static fromDao(dao: ProjectDao): ProjectModel {
    const model = new ProjectModel(dao.name, dao.description);
    model.id = dao.id;
    return model;
  }
}

export default ProjectModel;
