const jwtExpress = require("express-jwt");
import { ACCESS_TOKEN_SECRET } from "../configs";
import { errorResMsg } from "../utils/libss/response";

// Check if your are authorized for the route
export const authorize = (roleIds = []) => {
  if (typeof roleIds === "string") {
    // eslint-disable-next-line no-param-reassign
    roleIds = [roleIds];
  }

  return [
    // authenticate JWT token and attach user to request object (req.user)
    jwtExpress({ ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }),

    // authorize based on user role
    (req, res, next) => {
      if (roleIds.length && !roleIds.includes(req.user.adminRole)) {
        // user's role is not authorized
        return errorResMsg(
          res,
          401,
          `Admin Role: ${req.user.adminRole} does not have permission to perform this action or access this route`
        );
      }

      // authentication and authorization successful
      next();
      return false;
    },
  ];
};

