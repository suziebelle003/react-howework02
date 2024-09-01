const UserName = ({
  className,
  innerTxt,
}: {
  className: string;
  innerTxt: string;
}) => {
  return (
    <>
      <h3 className={className}>{innerTxt}</h3>
    </>
  );
};
export default UserName;
