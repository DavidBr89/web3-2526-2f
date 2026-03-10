import React, { useState } from "react";
import MyButton from "./MyButton";

interface FavoritesProps {
  counter: number;
}

const Favorites = ({ counter }: FavoritesProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <div className="border-amber-600 border-2 p-4">
      <h1>Favorites component</h1>
      <MyButton
        onClick={() => {
          // State moet je altijd immutable aanpakken -> geen push
          setFavorites([...favorites, counter]);
        }}>
        Voeg toe aan favorieten
      </MyButton>
      {/* Favorites tonen vanuit de state */}
      <ul>
        {favorites.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>
      {/* [23, 26, 28] => mappen / transformeren => [<li>23</li>, <li>26</li>, <li>28</li>] */}
    </div>
  );
};

export default Favorites;
