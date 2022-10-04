interface ProjectDao {
  id?: string;
  name: string;
  description: string;
  taskIds: Array<string>;
}

export default ProjectDao;
