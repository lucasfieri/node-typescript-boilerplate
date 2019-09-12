import express, { Request, Response } from 'express';
import { getAllUsers, addUser } from '../../queries/users';
import { postUserValidator } from '../../utils/validators/users.validators';
import { checkSchema, validationResult } from 'express-validator';
import { validate } from '../../utils/validate';
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     name: Users
 *     summary: Users CRUD
 *     security:
 *       - ApiKeyAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: A single user object
 *         schema:
 *           $ref: '#/definitions/User'
 *       '401':
 *         description: No auth token / no user found in db with that name
 *       '403':
 *         description: JWT token and username from client don't match
 */

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = await getAllUsers(id);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post('/', postUserValidator,  async (req: Request, res: Response, next) => {
  try {
    const { name, password, email, role_id } = req.body;
    // const users = await addUser({ name, password, email, role_id });
    return res.status(200).json();
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
});

export default router
