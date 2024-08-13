// images
import Img1 from "@/assets/images/small/img-1.jpg";
import Img2 from "@/assets/images/small/img-2.jpg";
import Img3 from "@/assets/images/small/img-6.jpg";
import Img4 from "@/assets/images/small/img-4.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <h2 className="p-5 font-medium text-base text-default-600">Cards</h2>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 gap-6 p-5">
        <div className="rounded-lg border border-default-200">
          <img
            className="w-full h-auto rounded-t"
            src={Img1}
            alt="Image Description"
          />
          <div className="p-6">
            <h3 className="mb-3 dark:text-gray-300">Card title </h3>
            <p className="mt-1 text-default-600 mb-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. With supporting text below as a
              natural lead-in to additional content.
            </p>
            <Link
              className="py-2 px-5 inline-flex font-semibold tracking-wide rounded-lg align-middle duration-500 text-sm text-center bg-primary/80 text-white mt-2 hover:bg-primary"
              to="#"
            >
              Button
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-default-200">
          <img
            className="w-full h-auto rounded-t"
            src={Img2}
            alt="Image Description"
          />
          <div>
            <div className="p-5">
              <h3 className="mb-3 dark:text-gray-300">Card title </h3>
              <p className="mt-1 text-default-600 mb-3">
                Some quick example text to build on the card title.
              </p>
            </div>
            <p className="border-y px-5 py-4 border-default-200">
              Dapibus ac facilisis in
            </p>
            <div className="p-5 flex items-center gap-5">
              <Link
                to=""
                className="card-link text-primary/90 hover:text-primary"
              >
                Card link
              </Link>
              <Link
                to=""
                className="card-link text-primary/90 hover:text-primary"
              >
                Another link
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border border-default-200">
            <div className="grid sm:grid-cols-3">
              <img
                src={Img3}
                className="rounded-s h-full w-full object-cover"
              />
              <div className="px-6 py-12 sm:col-span-2">
                <h3 className="mb-4 dark:text-gray-300">Card title</h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="mt-5 dark:text-gray-400">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-default-200">
            <div className="grid sm:grid-cols-3">
              <div className="px-6 py-12 sm:col-span-2">
                <h3 className="mb-4 dark:text-gray-300">Card title</h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="mt-5 dark:text-gray-400">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
              <img
                src={Img4}
                className="rounded-e h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
