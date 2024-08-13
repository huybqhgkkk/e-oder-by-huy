import { BreadcrumbAdmin } from "@/components";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// dummy data
import {
  captionsImages,
  gallery as galleryData,
  filterImages as galleryfilter,
  hoverEffectImages,
  images,
  mixImages,
} from "./data";
import { cn } from "@/utils";

const Gallery = () => {
  const [gallery, setGallery] = useState(galleryData);
  const [category, setCategory] = useState("all");

  /**
   * filter images by category
   * @param category category
   */

  const filterImages = (category) => {
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums =
        category === "all"
          ? galleryData
          : galleryData.filter((album) => album.category?.includes(category));
      setGallery(galleryAlbums);
    }, 300);
  };
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Gallery" subtitle="Extra Pages" />
        <div className="flex flex-col gap-6">
          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title uppercase">Filter Sort </h5>
            </div>
            <div className="p-6">
              <div className="flex justify-center">
                <div className="w-full filters-group-wrap mb-3">
                  <div className="flex justify-center mb-5">
                    <ul className="filter-options flex flex-wrap gap-4 justify-center">
                      <li>
                        <Link
                          to=""
                          className={cn(
                            "py-2 px-5 inline-flex font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center hover:bg-primary hover:text-white rounded-lg",
                            category === "all" && "bg-primary text-white"
                          )}
                          onClick={() => filterImages("all")}
                        >
                          All Items
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className={cn(
                            "py-2 px-5 inline-flex font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center hover:bg-primary hover:text-white rounded-lg",
                            category === "design" && "bg-primary text-white"
                          )}
                          onClick={() => filterImages("design")}
                        >
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className={cn(
                            "py-2 px-5 inline-flex font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center hover:bg-primary hover:text-white rounded-lg",
                            category === "creative" && "bg-primary text-white"
                          )}
                          onClick={() => filterImages("creative")}
                        >
                          Creative
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className={cn(
                            "py-2 px-5 inline-flex font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center hover:bg-primary hover:text-white rounded-lg",
                            category === "digital" && "bg-primary text-white"
                          )}
                          onClick={() => filterImages("digital")}
                        >
                          Digital
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className={cn(
                            "py-2 px-5 inline-flex font-semibold tracking-wide border border-default-200 align-middle duration-500 text-sm text-center hover:bg-primary hover:text-white rounded-lg",
                            category === "photography" &&
                              "bg-primary text-white"
                          )}
                          onClick={() => filterImages("photography")}
                        >
                          Photography
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="gallery-wrapper"
                className="flex flex-wrap justify-center"
              >
                <LightGallery
                  plugins={[lgZoom, lgThumbnail]}
                  mode="lg-fade"
                  speed={500}
                >
                  {(gallery || []).map((slide, idx) => {
                    return (
                      <a
                        key={idx}
                        className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-3 inline-block picture-item image-popup"
                        href={slide.image.src}
                      >
                        <div className="relative block overflow-hidden rounded group transition-all duration-500">
                          <img
                            src={slide.image.src}
                            className="rounded transition-all duration-500 group-hover:scale-105"
                            alt="work-image"
                          />
                          <div className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                            <div>
                              <p className="text-sm text-default-600">
                                {slide.tags}
                              </p>
                              <h6 className="text-base text-black font-medium">
                                {slide.title}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </LightGallery>
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title">Basic</h5>
            </div>
            <div className="p-6">
              <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {(images || []).map((item, idx) => {
                  return (
                    <img
                      key={idx}
                      alt="gallery"
                      className="object-cover object-center rounded"
                      src={item.src}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title">Mix Images</h5>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
                {(mixImages || []).map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`${
                        mixImages[idx].isBIG
                          ? "lg:col-span-2 lg:row-span-2"
                          : ""
                      }`}
                    >
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded"
                        src={item.src}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title">Captions</h5>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                {(captionsImages || []).map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`${
                        captionsImages[idx].isBIG
                          ? "py-32 px-10 lg:col-span-2"
                          : "sm:py-24 py-16 sm:px-10 px-6"
                      } flex flex-wrap w-full bg-gray-100 relative`}
                    >
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0 rounded"
                        src={item.src}
                      />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                          Shooting Stars
                        </h2>
                        <p className="leading-relaxed">
                          Skateboard +1 mustache fixie paleo lumbersexual.
                        </p>
                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ms-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title">Hover Effect</h5>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {(hoverEffectImages || []).map((item, idx) => {
                  return (
                    <div key={idx} className="flex relative">
                      <img
                        alt="gallery"
                        className="absolute w-full h-full object-cover object-center rounded"
                        src={item.src}
                      />
                      <div className="px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-80">
                        <h2 className="tracking-widest text-sm font-semibold text-primary mb-1">
                          THE SUBTITLE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {item.title}
                        </h1>
                        <p className="leading-relaxed">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="px-6 py-3 border-b border-default-200">
              <h5 className="card-title">Filter</h5>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5">
                {(galleryfilter || []).map((item, idx) => {
                  return (
                    <img
                      key={idx}
                      alt="gallery"
                      className={`${item.filter} object-cover object-center rounded filter`}
                      src={item.src}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
