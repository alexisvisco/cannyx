import * as Orm from 'typeorm'
import { Board } from './Board'
import { User } from './User'

@Orm.Entity({ name: 'companies' })
export class Company extends Orm.BaseEntity {

	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.Column({ unique: true })
	name: string

	@Orm.ManyToMany(_ => User)
	@Orm.JoinTable()
	members: User[]

	@Orm.Column('text', { array: true })
	admins: string[]

	@Orm.OneToMany(_ => Board, board => board.company)
	boards: Board[]

}