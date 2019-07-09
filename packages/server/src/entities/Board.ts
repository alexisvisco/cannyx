import * as Orm from 'typeorm'
import { Company } from './Company'
import { FeatureRequest } from './FeatureRequest'

@Orm.Entity({name: 'boards'})
export class Board extends Orm.BaseEntity {
	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.Column()
	name: string

	@Orm.Column()
	urlSuffix: string

	@Orm.ManyToOne(_ => Company, company => company.boards)
	company: Company

	@Orm.OneToMany(_ => FeatureRequest, fr => fr.board)
	featuresRequests: FeatureRequest[]
}