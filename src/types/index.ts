export type Config = {
  baseUrl: string
  dev: string
  production: string
}

export type User = {
  id: string
  name: string
  email: string
  username: string
}

export type Movie = {
  title: String
  description: String
  image: String
  imageTitle: String
  imageSmall: String
  trailer: String
  video: String
  year: String
  limit: Number
  genre: String
  isSeries: Boolean
}
