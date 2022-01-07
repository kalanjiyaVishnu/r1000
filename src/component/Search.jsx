import Project from "./Project";
export default function Search({ searchKEY, searchres, isLoading }) {
  return (
    <div className="w-full md:w-screen">
      search
      <div className="flex flex-wrap mx-auto">
        {!isLoading &&
          searchres.map((each, index) => (
            <Project details={each} key={index} />
          ))}
      </div>
      <p>{searchKEY}</p>
    </div>
  );
}
