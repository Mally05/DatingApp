import { Photo } from "./photo";

export interface Member {
  id: number;
  userName: string;
  age: number;
  lastActive: Date;
  created: Date;
  knownAs?: string;
  gender: string;
  lookingFor: string;
  introduction: string;
  interests: string;
  country: string;
  city: string;
  photoUrl: string;
  photos: Photo[];
}

