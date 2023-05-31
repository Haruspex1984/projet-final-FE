export interface Movie {

  id: number,
  title: string,
  director: string,
  description: string,
  length: number,
  isAdultOnly: boolean,
  isImax: boolean,
  imageURL: string,
  releaseDate: Date,
  genres: string[]
}
