const TeamIcon = ({ text, amount, icon }) => {
  const Icon = icon;
  return (
    <div className="flex p-5 border-b border-default-200">
      <div className="flex-grow">
        <h4 className="text-2xl mt-0 mb-1 text-default-700">{amount}</h4>
        <span className="text-default-600">{text}</span>
      </div>
      <Icon className="w-10 h-10 fill-default-700/20 stroke-default-700" />
    </div>
  );
};

export default TeamIcon;
