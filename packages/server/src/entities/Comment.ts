import * as Orm from 'typeorm'
import { FeatureRequest } from './FeatureRequest'
import { User } from './User'


export type CommentType = 'public' | 'internal'

@Orm.Entity({ name: 'vote' })
export class Comment extends Orm.BaseEntity {

	@Orm.PrimaryGeneratedColumn('uuid')
	id: string

	@Orm.OneToOne(_ => User)
	author: User

	@Orm.Column()
	content: string

	@Orm.Column('text', { array: true, default: [] })
	medias: string[]

	@Orm.ManyToOne(_ => FeatureRequest, featureRequest => featureRequest.votes)
	featureRequest: FeatureRequest

	@Orm.Column({
		type: 'enum',
		enum: [ 'public', 'internal' ],
		default: 'public'
	})
	type: CommentType

}