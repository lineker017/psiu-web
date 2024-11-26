import { IReactionComment } from '../reactions'

export interface IComment {
  id: string
  postId: string
  content: string
  commentedAt: string
  updatedAt: string | null
  reactions: IReactionComment[]
}
