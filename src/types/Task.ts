export enum Status {
  pending,
  done,
}

export interface ITask {
  id: string
  title: string
  description: string
  status: Status
  groupId: string
  createdAt: number
  updatedAt?: number
}
