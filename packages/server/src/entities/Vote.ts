import * as Orm from 'typeorm'
import { FeatureRequest } from './FeatureRequest'
import { User } from './User'

@Orm.Entity({ name: 'vote' })
export class Vote extends Orm.BaseEntity {
	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.OneToOne(_ => User)
	voter: User

	@Orm.ManyToOne(_ => FeatureRequest, featureRequest => featureRequest.votes)
	featureRequest: FeatureRequest
}