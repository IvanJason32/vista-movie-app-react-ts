import { useEffect, useState } from "react";
import { Container, AvatarContainer, Avatar, Degrade } from "../styled.components";
import CryptoJS from "crypto-js";
import BlackWidow from '../../assets/black-widow.png'
import { Item, Movie } from "../../interfaces/interface";

const Carousel = (): JSX.Element => {
  const [data, setData] = useState<Movie[]>([]);

  const getData = async (): Promise<void> => {
    const url = import.meta.env.VITE_BASE_URL;
    const timestamp = Date.now();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    try {
      const response = await fetch(
        `${url}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );
      const data: any = await response.json();
      const aItems = data.data.results.map((item: Item) => {
        const obj: Movie = {
          name: item.name,
          description: item.description,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        };
        return obj;
      });
      console.log(aItems);
      setData(aItems);
    } catch (error) {
      console.error("Error fetching Marvel characters:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Container height={50} src={data[1].thumbnail} />
          <AvatarContainer height={50}>
            <Avatar height={50} src={BlackWidow}/>
          </AvatarContainer>
          <Degrade height={50}/>
        </>
      ) : ( <section className="loading">Cargando...</section> )
    }
    </>
  );
};

export default Carousel;
