const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext bg-gray-100">{text}</span>
    </div>
  );
};

export default Tooltip;
