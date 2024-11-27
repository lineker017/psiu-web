import { api } from '../api-client'

interface CreateCommentRequest {
  content: string
  postId: string
}

interface CreateCommentResponse {
  result: 'success' | 'error'
  message?: string
}

export async function createComment({ content, postId }: CreateCommentRequest) {
  const response = await api
    .post(`comment/${postId}`, {
      json: {
        content,
      },
    })
    .json<CreateCommentResponse>()

  return response
}
