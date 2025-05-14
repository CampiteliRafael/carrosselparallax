export interface HeroDetails {
  fullName: string;
  birthday: string;
  homeland: string;
  height: number;
  weight: number;
}

export interface Hero {
  id: string;
  name: string;
  universe: number;
  imageUrl: string;
  details: HeroDetails;
}
