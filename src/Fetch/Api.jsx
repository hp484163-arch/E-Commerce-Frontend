import { useEffect, useState } from "react";
export const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((resp) => resp.json()).then((data) => setData(data)).catch((error) => console.error("Error: ", error));
  }, []);
 
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Api;