import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom"; 
import Movie from "../components/Movie";


function Detail() {
    const [details, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const getMovie = useCallback(async()=> {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json()
        setDetail(json.data.movie);
        setLoading(false);  
        }, [id])
    useEffect(() => {
        getMovie()
    }, [getMovie])
    console.log(details);
    
    
    return (
        <div>
          {loading ? <h1>Loading... Just wait a minute</h1> 
          : 
            <div>
                <Movie key={details.id}
                    id={details.id}
                    coverImage={details.medium_cover_image}
                    title={details.title}
                    summary={details.summary}
                    genres={details.genres}        
            />
            </div>
          }
          <h2>{details.title}영화의 평점은 {details.rating}입니다.</h2>
        </div>
      );
      }

export default Detail;