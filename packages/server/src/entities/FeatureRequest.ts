import * as Orm from 'typeorm'
import { Board } from './Board'
import { Vote } from './Vote'

@Orm.Entity({ name: 'features_requests' })
export class FeatureRequest extends Orm.BaseEntity {

	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.Column()
	name: string

	@Orm.Column()
	content: string

	@Orm.Column('text', { array: true, default: [] })
	medias: string[]

	@Orm.ManyToOne(_ => Board, board => board.featuresRequests)
	board: Board

	@Orm.OneToMany(_ => Vote, vote => vote.featureRequest)
	votes: Vote[]

	@Orm.Column({ type: 'bigint' })
	voteCount: number

}