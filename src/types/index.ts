export type Coords = {xCord: number; yCord: number};

export type character = {
  _id: string;
  name: string;
  xCord: number;
  yCord: number;
  img: string | undefined;
  found: boolean;
};

export type leaderboard = {date: number; time: number; username: string};

export type Game = {
  id: string;
  name: string;
  img: string;
  thumbnailImg: string;
  characters: character[];
  leaderboard: leaderboard[];
};

export type handleGuess = (characterName: string, characterId: string, characterCoords: Coords) => void;

export type settingDropdown = {
  isShown: boolean;
  xCord: number;
  yCord: number;
};
