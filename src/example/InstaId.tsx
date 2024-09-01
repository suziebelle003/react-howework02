const InstaId = ({
  className,
  innerTxt,
  onClickHandler,
}: {
  className: string;
  innerTxt: string;
  onClickHandler: (innerTxt: string) => void;
}) => {
  return (
    <>
      <p className={className}>{innerTxt}</p>
      <button onClick={() => onClickHandler(innerTxt)}>follow</button>
    </>
  );
};
export default InstaId;
