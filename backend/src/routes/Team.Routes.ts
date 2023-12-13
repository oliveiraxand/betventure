import express from 'express';
import TeamController from '../controllers/Team.Controller';
import { verifyTeam } from '../middlewares/TeamMiddleware';

const teamRouter = express.Router();
const teamController = new TeamController();

teamRouter.get("/", teamController.getAllTeams);

teamRouter.get("/:id", verifyTeam, teamController.getById);

teamRouter.post("/create", teamController.createTeam);

teamRouter.put("/:id", verifyTeam, teamController.updateTeam);

teamRouter.delete("/:id", verifyTeam, teamController.deleteTeam);

export default teamRouter;
