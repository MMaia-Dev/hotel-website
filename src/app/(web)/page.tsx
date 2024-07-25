import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewLetter";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { PageSearch } from "@/components/PageSearch/PageSearch";
import { getFeaturedRooms } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRooms();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
