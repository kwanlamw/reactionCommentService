import { TRoutesInput } from "../types/routes";
import { createUser } from "../controllers/user.controller";
import { createComment } from "../controllers/comment.controller";
import { createReaction } from "../controllers/reaction.controller";

export default ({ app }: TRoutesInput) => {
  app.post("/api/userComment", async (req:any, res:any) => {
    const user = await createUser({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const comment = await createComment({
      name: req.body.petName,
      owner: user._id,
    });

    return res.send({ user, comment });
  });

  app.get("/api/userReaction", async (req: any, res: any) => {
    const user = await createUser({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
    const reaction = await createReaction({
        name: req.body.petName,
        owner: user._id,
    });

    return res.send({ user, reaction });
  });
};