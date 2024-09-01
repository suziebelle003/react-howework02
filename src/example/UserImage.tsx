const UserImage = ({
  className,
  src,
  alt,
}: {
  className: string;
  src: string;
  alt: string;
}) => {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
};
export default UserImage;
