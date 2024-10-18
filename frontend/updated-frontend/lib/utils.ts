import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export interface Profile {
  id: number,
  name: string,
  desc: string,
  country: string,
  scope: string,
  category: string,
  minWam: number,
  degLevels: string[],
  load: string,
  link: string,
  img: string,
  rating: number,
  numRates: number,
  comments: number[]
}

export interface ProfileProps {
  profile: Profile
}

export interface CommentProps {
  comments: Comment[]
}

export interface Comment {
  id: number,
  userid: number,
  title: string,
  desc: string,
  rating: number,
  upvotedUsers: number[],
  downvotedUsers: number[]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
