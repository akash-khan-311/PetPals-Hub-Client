const StafCard = ({ staf }) => {
  return (
    <div className="w-full h-full flex flex-col border  border-yellow-800">
      <div className="h-64">
        <img src={staf.image} className="h-full w-full" alt="" />
      </div>
      <div className="p-3">
        <div className="my-1">
          <h3 className="text-2xl font-bold">{staf.name}</h3>
          <p className="text-yellow-800">{staf.position}</p>
        </div>
        <p className="text-gray-600">{staf.description}</p>
      </div>
    </div>
  );
};
export default StafCard;
