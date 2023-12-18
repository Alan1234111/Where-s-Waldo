import {handleGuess} from "../types";

type PropsCharacterDropdownContainer = {
  _id: string;
  name: string;
  xCord: number;
  yCord: number;
  img: string | undefined;
  handleGuess: handleGuess;
};

export const CharacterDropdownContainer = ({_id, name, xCord, yCord, img, handleGuess}: PropsCharacterDropdownContainer) => {
  return (
    <button
      onClick={() =>
        handleGuess(name, _id, {
          xCord: xCord,
          yCord: yCord,
        })
      }
    >
      <img src={img} />
      <p>{name}</p>
    </button>
  );
};
