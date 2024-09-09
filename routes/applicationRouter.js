import express from 'express';
import {postApplication,employerGetAllApplications,jobseekerDeleteApplication,jobseekerGetAllApplications} from '../controllers/applicationController.js';
import { isAuthorized } from '../middlewares/auth.js';

const router=express.Router();

router.post("/post", isAuthorized, postApplication);
router.get("/jobseeker/getall",isAuthorized,jobseekerGetAllApplications);
router.get("/employer/getall",isAuthorized,employerGetAllApplications);
router.delete("/delete/:id",isAuthorized,jobseekerDeleteApplication);

export default router;