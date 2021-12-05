import { server } from './config.js';

export async function getProject(projectCode) {
    const response = await fetch(server + '/saleproject/GetByCode/' + projectCode);
    const projectData = await response.json();
    return projectData;
  }