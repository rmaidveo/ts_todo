export type Task = {
  id: string
  text: string
  isCompleted: boolean
}

export type Filters = 'All' | 'Active' | 'Completed'
