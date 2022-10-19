import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const { movie, id } = useParams();
  const [card, setCard] = useState("");

  //   console.log("aca", id, movie);
  useEffect(() => {
    axios.get(`/api/movies/${id}`).then((res) => setCard(res.data));
  }, [id]);

  return (
    <div className="colorGrid">
      <div>
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
            alt=""
            width={270}
            height={345}
          />
        </figure>
        <div>
          <div>
            <div>
              <p>Titulo: {card.title}</p>
            </div>
            <div>
              <p>Popularity: {card.popularity}</p>
            </div>
          </div>
          <div>
            <h4>Descripcion</h4>
            <p className="centerParraf">
              {card.overview === ""
                ? "Lo sentimos, descripcion actualmente no disponible"
                : card.overview}
            </p>
            <br />
          </div>
        </div>
        <Link to="/">
          <button>Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
