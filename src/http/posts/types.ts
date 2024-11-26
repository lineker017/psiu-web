import { IComment } from '../coments'
import { IReactionPost } from '../reactions'

export interface IPost {
  id: string
  content: string
  publishedAt: string
  updatedAt: string | null
  comments: IComment[]
  reactions: IReactionPost[]
}
