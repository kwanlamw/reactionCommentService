import { TRoutesInput } from "../types/routes";
import { createUser } from "../controllers/user.controller";
import { createComment } from "../controllers/comment.controller";
import { createReaction } from "../controllers/reaction.controller";

export default ({ app }: TRoutesInput) => {

  //get all the comment with reaction
  app.get("/api/getAllCommentReaction", async (req: any, res: any) => {
    const user = await createUser({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const comment = await createComment({
      text: req.body.text,
      owner: user._id,
    });

    const reaction = await createReaction({
      name: req.body.reactionName,
      owner: user._id,
    });

    return res.send({ user, comment, reaction });
  });

  //add comment
  app.post("/api/editComment", async (req: any, res: any) => {
    const user = await createUser({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const comment = await createComment({
      text: req.body.text,
      owner: user._id,
    });

    return res.send({ user, comment });
  });

  //edit comment
  app.post("/api/addComment", async (req: any, res: any) => {
    const user = await createUser({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const comment = await createComment({
      text: req.body.text,
      owner: user._id,
    });

    return res.send({ user, comment });
  });

  //remove comment
  //add reaction
  //edit reaction = change
  //remove reaction


  //   app.get("/api/getUserReaction", async (req: any, res: any) => {
  //     const user = await createUser({
  //         email: req.body.email,
  //         firstName: req.body.firstName,
  //         lastName: req.body.lastName,
  //       });
  //     const reaction = await addReaction({
  //         name: req.body.reactionName,
  //         owner: user._id,
  //     });

  //     return res.send({ user, reaction });
  //   });
};
