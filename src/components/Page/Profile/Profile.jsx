import React from 'react';
import Loader from '../../Loader';
import userPhoto from "../../../acces/img/avatar.png";
import ProfileStatus from "./ProfileStatus";

const profile = (props) => {
    if (!props.profile) {
        return <Loader/>;
    }

    return (
        <div className='page__profile profile'>
            <div className='profile__avatar'>
                <img src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : userPhoto} alt=''
                />
            </div>
            <div className='profile__about about'>
                <h4 className='about__name'>{props.profile.fullName}</h4>

                <p className='about__status-user'>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}/>
                </p>


                <div className='about__contacts'>
                    <span className='contacts__name'>facebook:</span>
                    <span>{props.profile.contacts.facebook}</span>
                </div>
                <div className='about__contacts'>
                    <span className='contacts__name'>vk:</span>
                    <span>{props.profile.contacts.vk}</span>
                </div>
                <div className='about__contacts'>
                    <span className='contacts__name'>instagram:</span>
                    <span>{props.profile.contacts.instagram}</span>
                </div>
            </div>
        </div>
    );
};
export default profile;
