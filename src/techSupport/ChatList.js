import React, { useState } from 'react'
import messageStyle from '../techSupport/techSupport.module.css'
import Styles from '../component/Style.module.css';
import { AddMsgIcon, Emoji, MoreIcon, OfflineIcon, Search, SentIcon, SentmsgIcon } from '../Svg';
import styles from '../categories/category.module.css';
import { Popover } from '@mui/material';

const ChatList = () => {
    const [search, setSearch] = useState('')
    const chatListData = [
        {
            id:0,
            image:'/ChatPerson.png',
            name:'Jhon deo',
            message:'Hi, i want make enquiries about...',
            status:'new',
            datetime:'12:55 am'
        },
        {
            id:1,
            image:'/ChatPerson.png',
            name:'Janet Adebayo',
            message:'Hi, i want make enquiries about...',
            status:'Inprocess',
            datetime:'12:55 am'
        },
        {
            id:2,
            image:'/ChatPerson.png',
            name:'Kunle Adekunle',
            message:'Hi, i want make enquiries about...',
            status:'Resolved',
            datetime:'12:55 am'
        },
        {
            id:3,
            image:'/ChatPerson.png',
            name:'Jhon deo',
            message:'Hi, i want make enquiries about...',
            status:'Resolved',
            datetime:'12:55 am'
        },
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (
    <div className={Styles.width}>
        <div className={messageStyle.container}>
            <div className={Styles.notification}>
                <div className={Styles.notifText}>
                    Chat
                </div>
                <div className={messageStyle.numText}>
                    5
                </div>
            </div>
            <div style={{marginTop:20}}>
                <div className={styles.search}>
                    <Search /> 
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
            </div>
            </div>
            <div className={messageStyle.textStyle} style={{marginTop:20}}>
                Today
            </div>
            {chatListData?.map((item,key) => {
                return (
                    <div style={{marginTop:10}}>
                    <div className={Styles.notification}>
                        <div className={Styles.width}>
                            <div>
                                <OfflineIcon/>
                                <img src={item.image}/>     
                            </div>

                            <div style={{marginTop:5}}>
                                <p className={messageStyle.nameText}>
                                    {item.name}
                                </p>
                                <span className={messageStyle.descText}>
                                    {item.message}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={Styles.width}>
                                <div style={{
                                    backgroundColor: item.status === 'new' ? '#FEF5EA' : item.status === 'Inprocess' ? '#f9f1db' : '#e8f9f6',
                                    borderRadius:8,
                                    width:'100%',
                                    height:20,
                                    paddingLeft:7,
                                    paddingRight:5,
                                    paddingTop:2,
                                    marginTop:5
                                }}>
                                    <div style={{
                                        fontFamily:'Inter',
                                        fontWeight:'400',
                                        fontSize:12,
                                        textAlign:'center',
                                        color:item.status === 'new' ? '#1C1D22' : item.status === 'Inprocess' ? '#FFD700' : '#1A9882'
                                    }}>{item.status}</div>
                                </div>
                                {item.status === 'new' ? (
                                <div className={messageStyle.numStyle}>
                                    2
                                </div>
                                ) : null}
                            </div>
                            <div className={messageStyle.descText} style={{textAlign:'right',paddingTop:5}}>
                                {item.datetime}
                            </div>
                        </div>
                    </div>
                    <div className={messageStyle.lineStyle} style={{marginTop:10}}/>
                    </div>
                )
            })}
        </div>
        <div className={messageStyle.chattingContainer}>
            <div className={Styles.notification}>
                <div className={Styles.width}>
                    <div>
                        {/* <OfflineIcon/> */}
                        <img src='/ChatPerson.png'/>     
                    </div>

                    <div style={{marginTop:5}}>
                        <p className={messageStyle.nameText}>
                            John Doe
                        </p>
                        <span className={messageStyle.descText}>
                            <img src='/onlineIcon.png'/> Ticket : #123456
                        </span>
                    </div>
                </div>
                <div>
                    <div onClick={handleClick}>
                        <MoreIcon/>
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <div className={messageStyle.popUpStyle}>
                            <div className={messageStyle.updateText}>Update status</div>
                            <div className={messageStyle.resolvedView} style={{marginTop:15}}>Resolved</div>
                        </div>
                    </Popover>
                </div>

            </div>
            <div className={messageStyle.lineStyle}/>
            <div className={messageStyle.dateStyle}>
                <p>April 1, 2024</p>
            </div>
            <div className={messageStyle.recievedMessage}>
                <p>
                    Hello, I want to make enquiries about your
                    product
                </p>
            </div>
            <div className={messageStyle.recievedMessage}>
                <span>12:57 am </span>
            </div>
            <div className={messageStyle.sentMessage}>
                <p>
                    Hello Janet, thank you for reaching out
                </p>

            </div>
            <div className={messageStyle.sentMessage}>
                <span>12:57 am </span>
                <SentmsgIcon/>
            </div>
            <div className={messageStyle.sentMessage}>
                <p>
                    Hello Janet, thank you 
                </p>

            </div>
            <div className={messageStyle.sentMessage}>
                <span>12:57 am </span>
                <SentmsgIcon/>
            </div>
            <div className={messageStyle.dateStyle}>
                <p>Today</p>
            </div>
            <div className={messageStyle.recievedMessage}>
                <p>
                    Hello, I want to make enquiries about your
                    product
                </p>
            </div>
            <div className={messageStyle.recievedMessage}>
                <span>12:57 am </span>
            </div>
            <div className={messageStyle.inputbox}>
                <div>
                    <div className={messageStyle.inrBox}>
                        <AddMsgIcon/>
                    </div>
                    <div>
                        <input type="text" placeholder='Enter' name='password' />
                    </div>
                </div>
                <div>
                    <div style={{marginRight:10}}>
                        <Emoji/>
                    </div>
                    <div className={messageStyle.sendingMsg}>
                        <p>Sent</p>
                        <SentIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatList