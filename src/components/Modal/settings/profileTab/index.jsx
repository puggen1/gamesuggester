import ChangeAvatar from '../../../ChangeAvatar';

const ProfileTab = ({feedBack, openFeedback, setFeedBackType}) => {
	return (
		<>
			<ChangeAvatar feedBack={feedBack} openFeedback={openFeedback} setFeedBackType={setFeedBackType} />
		</>
	);
};

export default ProfileTab;
