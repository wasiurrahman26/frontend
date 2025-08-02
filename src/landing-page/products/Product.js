import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function Product() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl="/media/images/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkimage1="/media/images/images/googlePlayBadge.svg"
        linkimage2="/media/images/images/googlePlayBadge.svg"
      />
      <RightSection
        imageUrl="/media/images/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkimage1="/media/images/images/googlePlayBadge.svg"
        linkimage2="/media/images/images/googlePlayBadge.svg"
      />
      <LeftSection
        imageUrl="/media/images/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkimage1="/media/images/images/googlePlayBadge.svg"
        linkimage2="/media/images/images/googlePlayBadge.svg"
      />
      <RightSection
        imageUrl="/media/images/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkimage1="/media/images/images/googlePlayBadge.svg"
        linkimage2="/media/images/images/googlePlayBadge.svg"
      />
      <Universe />
    </div>
  );
}
export default Product;
