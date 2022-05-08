import { model, Schema } from 'mongoose';

const schema = new Schema({
  _id: { type: String, default: undefined },
  id: { type: String, required: true },
  title: { type: String, required: true },
  overview: { type: String, required: true },
  genre_ids: { type: [String], required: true },
  release_date: { type: String, required: true },
  popularity: { type: Number, required: true },
  vote_average: { type: Number, required: true },
  vote_count: { type: Number, required: true },
  poster_path: { type: String, required: true },
});

export const MongooseMovieModel = model('Movie', schema);
