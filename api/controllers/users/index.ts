import express, { Request, Response } from 'express';
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

router.get('/', async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ users: 'Foi?' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
