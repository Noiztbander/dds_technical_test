const TagItem = ({ text, icon }: { text: string; icon?: JSX.Element }) => {
  return (
    <span>
      {icon && icon}
      {text}
    </span>
  );
};

export default TagItem;
