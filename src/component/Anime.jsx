import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function Anime({ addNew }) {
  const { id } = useParams();
  useEffect(() => {
    fetch_data();
    console.log("eachAnime", eachAnime);
  }, []);
  const [eachAnime, setEachAnime] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const fetch_data = async () => {
    await axios.get(`https://kitsu.io/api/edge/anime/${id}`).then((res) => {
      const {
        data: { attributes },
      } = res.data;
      setEachAnime({
        id,
        head: { ...attributes.titles },
        episode: attributes.episodeCount,
        seaFin: 3,
        type: attributes.showType,
        posterImage: attributes.posterImage,
        description: attributes.description,
        favoritesCount: attributes.favoritesCount,
        popularityRank: attributes.popularityRank,
        ageRating: attributes.ageRating,
        status: attributes.status,
      });
      setisloading(false);
    });
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 h-36 absolute top-0 left-0 right-0 z-0"></div>
      {!isloading ? (
        <div className="relative z-40 flex w-full">
          <div
            className="w-36 md:w-1/6 rounded-md
        h-full overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-150 ease-in-out selector select-none"
          >
            {eachAnime.posterImage && (
              <img
                src={eachAnime.posterImage.original || ""}
                alt={eachAnime.en || eachAnime.en_jp || ""}
                className="object-cover w-full select-none"
              />
            )}
          </div>
          <div className="p-4 w-full text-white-light flex flex-col">
            <h1 className="text-2xl mx-2 font-medium truncate overflow-ellipsis">
              {`${eachAnime.head.en || eachAnime.head.en_jp}/${
                eachAnime.head.ja_jp
              }`}
            </h1>

            <div className="flex flex-col mt-6">
              <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 shadow-md rounded-sm px-2 py-1 w-max flex flex-nowrap whitespace-nowrap items-center hover:translate-x-2 transform transition-all duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="px-2">{`episodes & info`}</p>
              </span>
              <ul className="text-xl font-medium text-gray-800 list-disc ml-6">
                <li>{eachAnime.ageRating}</li>
                <li>{eachAnime.episode}</li>
                <li>{eachAnime.status}</li>
              </ul>
            </div>
            <div className="flex flex-col mt-6 h-auto">
              <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 shadow-md rounded-sm px-2 py-1 w-max flex flex-nowrap whitespace-nowrap items-center hover:translate-x-2 transform transition-all duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <p className="px-2">description</p>
              </span>
              <p className="text-black">{eachAnime.description}</p>
            </div>
            <div className="flex mt-6 gap-4">
              <span
                className="bg-cgray-heavy rounded-sm px-2 py-1 w-max flex flex-nowrap whitespace-nowrap items-center hover:-translate-y-2 transform transition-all duration-100 cursor-pointer"
                onClick={() => {
                  if (!isAdded) {
                    setIsAdded(addNew(eachAnime));
                    setShowHint(true);
                  } else setIsAdded(false);

                  console.log(" select-none", isAdded);
                }}
              >
                {!isAdded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                <p className="px-2">
                  {!isAdded ? "Start watching" : "finished"}
                </p>
              </span>
              <span className="bg-cgray-heavy rounded-sm px-2 py-1 w-max flex flex-nowrap whitespace-nowrap items-center hover:translate-x-2 transform transition-all duration-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="px-2">wishlist</p>
              </span>
            </div>
            {isAdded && (
              <div className="flex gap-4 items-center mt-4 text-black">
                <p>currently at</p>
                <input
                  type="number"
                  placeholder="enter"
                  className="text-white-light rounded-md shadow-md p-2 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 bg-opacity-40 placeholder-white-light
                  focus:outline-none outline-none border-none hover:bg-opacity-5"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
      {showHint && (
        <div className="w-full z-50 text-white-light  fixed bottom-8 left-0 box-border">
          <div
            className={`flex items-center  w-2/3 mx-auto py-4 px-2  md:w-3/5 bg-gray-800 rounded-md transform transition-all relative apply-fade`}
          >
            <div className="bg-yellow-400 mx-2 rounded-sm px-2  text-gray-800">
              hint
            </div>
            <p className="">Added to List</p>
            <button
              className="ml-auto px-2"
              onClick={() => {
                setShowHint(false);
              }}
            >
              💀
            </button>
          </div>
          {setInterval(() => {
            setShowHint(false);
          }, 3000)}
        </div>
      )}
    </div>
  );
}
