/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - email
 *       - name
 *       - password
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         format: password

 */
export class User {
  id: number;
  name: string;
  password: string;
  email: string;
  // tslint:disable-next-line: variable-name
  created_at: Date;
  // tslint:disable-next-line: variable-name
  deleted_at: Date;
}
