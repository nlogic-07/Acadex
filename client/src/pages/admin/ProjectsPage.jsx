import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProjects,
  approveProject,
  rejectProject,
} from "../../store/slices/adminSlice";
import {
  downloadProjectFile,
  getProject,
  updateProject,
} from "../../store/slices/projectSlice";
import { toast } from "react-toastify";

const ProjectsPage = () => {
  return <></>;
};

export default ProjectsPage;
