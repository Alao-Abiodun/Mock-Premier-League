import { adminPayload } from './admin.dto';
import { userPayload  } from './user.dto';

export type authPayload = adminPayload | userPayload