/* eslint-disable react/no-unescaped-entities */
import Hero from "./Hero";
import Shops from "./Shops";
import Unique from "./Unique";
import ContinueTrendingProducts from "./ContinueTrendingProducts";
import Discount from "./Discount";
import TopCategories from "./TopCategories";
import { Newsletter } from "./NewsLetter";
import LatestBelog from "./LatestBelog";
import FeaturesGrid from "./FeaturesGrid";
import ProductGrid from "./ProductGrid";
import TrendingProducts from "./TrendingProducts";
export default function Home() {
  return (
    <div>
      <Hero/>
    <FeaturesGrid/>
    <ProductGrid/>
    <Shops/>
     <Unique/>
     <TrendingProducts/>
   <ContinueTrendingProducts/>
     <Discount/>
     <TopCategories/>
     <Newsletter/>
     <LatestBelog/>
     </div>
 
);
}
