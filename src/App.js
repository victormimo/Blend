import { SpaceCard } from "./components/SpaceCard";
import { Grid } from "@chakra-ui/react";

const property1 = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const property2 = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$2,100.00",
  reviewCount: 2,
  rating: 2,
};

const App = () => {
  return (
    <Grid>
      <SpaceCard {...property1} />
      <SpaceCard {...property2} />
    </Grid>
  );
};

export default App;
