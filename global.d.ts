import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Queue } from './types/Queue'
import { Item } from './types/Item'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    queue: Entity<Queue>,
    item: Entity<Item>,
  }
}
