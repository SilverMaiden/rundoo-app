export const NoSearchResults: React.FC = () => {
  return (
    <div className="pb-72" style={{ height: "70%" }}>
      <div className="overflow-hidden text-xl px-96 md:text-2xl text-gray-400 font-thin">
        Uh oh, looks like we couldn't find anything!
      </div>
      <div className="overflow-hidden text-md px-96 md:text-lg text-gray-400 font-thin">
        Add more suppliers for more results
      </div>
    </div>
  );
};
