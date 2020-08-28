import React from 'react'
import './Attendcards.css'
import Card from './Card/Card'
import Badge from '@material-ui/core/Badge';
import MediaCard from './Card/PostAssignmentCard'
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, Button, Avatar, Chip } from '@material-ui/core';
import PlayCircleFilledWhiteTwoToneIcon from '@material-ui/icons/PlayCircleFilledWhiteTwoTone';

const AttendCards = () => {

    return (
        <div className="infoCard">
            <hr />
            <h5>What Goals, Badges & Skills will be achieved in this Class?</h5>
            <div className="tags__container">
                <div className="badges">
                    <button className="goal" color="secondary">Goals</button>
                    <div className="sets">
                        {/* <Avatar src="" alt="15%">Explorer </Avatar> */}
                        <Chip avatar={<Avatar>15%</Avatar>} label="Explorer" />
                    </div>
                </div>
                <div className="badges" style={{ flex: 1, marginBottom: '35px' }}>
                    <button className="badges green" style={{ backgroundColor: '#8AE241 !important' }} >Badges </button>
                    <div className="sets">
                        {/* <Avatar src="" alt="15%">Explorer </Avatar> */}
                        <Chip avatar={<Avatar>+20P</Avatar>} className="yellow" label="Powerhouse of Ideas" />
                        <Chip avatar={<Avatar>+10P</Avatar>} className="yellow" label="Daredevil" />
                        <Chip avatar={<Avatar>+10P</Avatar>} className="yellow flat" style={{
                            borderRadius: '30px 5px 5px 30px !important'
                        }} label="The Troubleshooter" />
                    </div>

                </div>
            </div>
            <div className="badges" style={{ flex: 1, marginBottom: '101px' }}>
                <button className="badges purple"  >Skills </button>
                <div className="sets">
                    {/* <Avatar src="" alt="15%">Explorer </Avatar> */}
                    <Chip avatar={<Avatar>+10P</Avatar>} className="yellow" label="Creative thinking" />
                    <Chip avatar={<Avatar>+10P</Avatar>} className="yellow" label="Flexible Thinking" />
                    <Chip avatar={<Avatar>+20P</Avatar>} className="yellow" label="Management" />
                    <Chip avatar={<Avatar>+10P</Avatar>} className="yellow" label="Strategic thinking" />
                    <Chip avatar={<Avatar>+10P</Avatar>} className="yellow" label="Learn">

                    </Chip>
                    <PlayCircleFilledWhiteTwoToneIcon className="play" fontSize={'large'} />

                </div>



            </div>

            <hr />

            <h5>What will be covered in this Class?</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit.</p>
            <hr />
            <h5>What are the Post-Class Assignments?</h5>
            <div className="mediadiv">
                <div className="media">
                    <MediaCard color="#CDA9FF" />
                    <MediaCard color="#8AB7C0" />
                </div>
            </div>


            <hr />
            <h5>How to get ready for this class?</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit.</p>
            <hr />
            <h5>How to attend this class?</h5>

            <div className="infoCard__cards">
                <Card num={1} about="Book your Class" src={require('./Assets/preparation.svg')} info=" Go to Calendar & choose from the wide range of Masterclasses." />
                <Card num={2} about="GET PREPARED" src={require('./Assets/preparation.svg')} info="Prepare for the class by following the instructions in the Overview." />
                <Card num={3} about="SET UP FOR CLASS" src={require('./Assets/device.svg')} info="Check the device and app requirements at least 15 minutes prior to start time." />
                <Card num={4} about="JOIN CLASS" src={require('./Assets/preparation.svg')} info="Open link sent on your registered mobile or email on the device" />
            </div>
        </div>
    )
}

export default AttendCards
