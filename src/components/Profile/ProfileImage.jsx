import '../../assets/style/profileImage.css';
function ProfileImage({picture, size}) {
	let classes = `profileImage ${size}`;
	return (<img
    className={classes}
    src={picture}
	        />);
}

export default ProfileImage;
