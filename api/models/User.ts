import { Model } from 'objection';
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
export class User extends Model {
  readonly id?: number;
  name: string;
  password: string;
  email: string;
  role_id: number;
  active?: boolean;
  mail_confirmed?: boolean;
  created_at?: string;
  deleted_at?: string;
  updated_at?: string;

  static get tableName() {
    return 'users';
  }
}
