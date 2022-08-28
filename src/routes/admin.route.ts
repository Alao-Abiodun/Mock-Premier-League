import { Router } from 'express';

const router: Router = Router();

import { AdminController } from '../controllers';

router.post('/signup', AdminController.signup);

router.post('/signin', AdminController.signin);

export { router as adminRouter };
