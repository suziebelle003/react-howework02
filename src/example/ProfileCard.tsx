import Landscape from './Landscape';
import UserImage from './UserImage';
import UserName from './UserName';
import InstaId from './InstaId';
const ProfileCard = () => {
  const onClickHandler = (innerTxt: string) => {
    confirm(`${innerTxt}님께 팔로우 신청을 할까요?`);
  };
  return (
    <>
      <article className="card">
        <div>
          <Landscape
            className="card-img"
            src="https://cdn.pixabay.com/photo/2024/07/05/08/33/koala-8874351_1280.jpg"
            alt="background-pic"
          />
        </div>
        <div className="profile">
          <UserImage
            className="prof-img"
            src="https://cdn.pixabay.com/photo/2023/11/14/20/08/woman-8388428_1280.jpg"
            alt="profile-pic"
          />
          <UserName className="alias" innerTxt="Suzie Belle" />
          <InstaId
            className="username"
            innerTxt="@suzie._.belle"
            onClickHandler={onClickHandler}
          />
        </div>
      </article>
    </>
  );
};
export default ProfileCard;
