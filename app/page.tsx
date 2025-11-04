// src/app/page.tsx

import Navbar from "@/app/components/layout/navbar/page";
import Breadcrumb from "@/app/components/products/breadcrumbs/page";
import RelatedProducts from "./components/products/relatedProduct/relatedproduct";
import PopularProducts from "./components/products/popularProduct/page";
import ImageGallery from "./components/products/productImageGallery/imageGallery/imagegallery";
import Footer from "./components/layout/footer/page";
import ProductReviews from "./components/reviewSection/reviewsection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <ImageGallery />
      <RelatedProducts />
      <ProductReviews />
      <PopularProducts />
      <Footer />
    </>
  );
}
