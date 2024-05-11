
const vehicleCard = ({ vehicle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{vehicle.name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">ID:</span> {vehicle.id}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Number:</span> {vehicle.number}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Type:</span> {vehicle.type}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Is Default:</span> {vehicle.isDefault ? 'Yes' : 'No'}
        </p>
      </div>
      <div className="px-6 py-4">
        {/* Add additional content or buttons here if needed */}
      </div>
    </div>
  );
};

export default vehicleCard;
