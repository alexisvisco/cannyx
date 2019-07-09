import * as Orm from 'typeorm'
import { Company } from './Company'

@Orm.Entity({ name: 'users' })
export class User extends Orm.BaseEntity {

	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.Column()
	firstName: string

	@Orm.Column()
	lastName: string

	@Orm.ManyToMany(_ => Company, company => company.id)
	@Orm.JoinTable()
	companies: Company[]
}