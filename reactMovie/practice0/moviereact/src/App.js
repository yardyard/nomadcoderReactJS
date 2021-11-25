// --------- import ---------
import { useEffect, useState } from "react";

function App() {
  // --------- state ---------
  const [loading, setLoading] = useState(true);
  const [coins , setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    // api로부터 response인자를 통해 데이터를 받고 response에서 json을 추출한 값을 return해준다.
    .then((response) => response.json())
    // 그다음 json을 setCoins(modify)에 넣어주고, setLoading에 false값을 return한다.
    .then((json)=> {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  
  // --------- function ---------

 
  // --------- rendering ---------
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {/* coin을 map으로 나눠서 coin 변수로 각 코인들을 리턴해준다. */}
        {coins.map((coin) => 
        <li>
          {/* 아래의 coin은 coins state의 array를 map으로 나눈 각각의 coin이다. */}
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </li>
        )}
      </ul>
    </div>
  );
};
export default App;
