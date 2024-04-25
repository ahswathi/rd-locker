import { Box, Modal } from '@mui/material'
import React from 'react'
import { Logo, Print, PrinterIcon } from '../Svg';
import transStyle from '../transactions/transactions.module.css'
import styles from '../component/Style.module.css'

const DownloadPdf = ({open,onCloseModal}) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "15px 22px",
        height: 'fit-content',
        display: "block",
        width: '1200px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };
  return (
    <Modal
        open={open}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <div className={transStyle.logoStyle}>
                <Logo/> <h2>LOGO</h2>
            </div>
            <div className={transStyle.container}>
                <div style={{marginTop:20}}>
                    <p className={transStyle.descText}>
                        Hello Charles Hall,
                    </p>
                    <p className={transStyle.descText}>
                        This is the receipt for a payment of INR 268.00) you made to <span> Relik - Admin Dashboard</span> Demo.
                    </p>
                </div>
                <div className={transStyle.logoStyle}>
                    <div className={transStyle.download}>
                        <span>Download</span>
                    </div>
                    <div className={transStyle.printStyle} style={{marginTop:10,marginLeft:10}}>
                        <div style={{marginTop:5}}><PrinterIcon/></div>
                        <span>Print Inovice</span>
                    </div>
                </div>
            </div>
            <div className={transStyle.container}>
                <div style={{marginTop:20}}>
                    <p className={transStyle.descText}>
                        Payment No.
                    </p>
                    <span className={transStyle.boldText}>
                        ABC123
                    </span>
                </div>
                <div style={{marginTop:20,textAlign:'right'}}>
                    <p className={transStyle.descText}>
                        Payment date
                    </p>
                    <span className={transStyle.boldText}>
                        October 2, 2021 - 03:45 pm
                    </span>
                </div>
            </div>
            <div className={transStyle.lineStyle} style={{marginTop:20}}/>
            <div className={transStyle.container} style={{marginTop:20}}>
                <div>
                    <h5 className={transStyle.address}>Company</h5>
                    <p className={transStyle.descText} style={{paddingTop:10}}>
                        Street Address
                        <br/>
                        State, City
                        <br/>
                        Region, Postal Code
                        <br/>
                        Aradee@example.com
                    </p>
                    
                </div>
                <div style={{textAlign:'right'}}>
                    <h5 className={transStyle.address}>Client</h5>
                    <p className={transStyle.descText} style={{paddingTop:10}}>
                        Street Address
                        <br/>
                        State, City
                        <br/>
                        Region, Postal Code
                        <br/>
                        Aradee@example.com
                    </p>
                </div>
            </div>
            <div className={transStyle.billContainer} style={{marginTop:20}}>
                <div className={transStyle.productStyle}>PRODUCT</div>
                <div className={transStyle.qntStyle}>QNT</div>
                <div className={transStyle.unitStyle}>UNIT</div>
                <div className={transStyle.ammountStyle}>AMOUNT</div>
            </div>
            <div style={{marginTop:10}} className={transStyle.subTotalStyle}>
                <div className={transStyle.productStyle}>
                    <div className={transStyle.numStyle}>1</div>
                    <div>
                        <span className={transStyle.entryText} style={{marginLeft:10}}>Dummy content</span>
                        <p className={transStyle.descText} style={{marginLeft:10}}>Dummy content added here</p>
                    </div>
                </div>
                <div className={transStyle.qntStyle}>1</div>
                <div className={transStyle.unitStyle}>INR 1.800,00</div>
                <div className={transStyle.ammountStyle}>INR 1.800,00</div>
            </div>
            <div className={transStyle.lineStyle}/>
            <div className={transStyle.lineStyle} style={{marginTop:10}} />
            <div className={transStyle.subTotalStyle}>
                <div className={transStyle.subTotalText}>Sub-Total</div>
                <div className={transStyle.subTotalText}>INR 1.800,00</div>
            </div>
            <div className={transStyle.lineStyle} style={{marginTop:10}} />
            <div className={transStyle.subTotalStyle}>
                <div className={transStyle.subTotalText}>Vat Price</div>
                <div className={transStyle.subTotalText}>INR 1.800,00</div>
            </div>
            <div className={transStyle.lineStyle}/>
            <div className={transStyle.lineStyle} style={{marginTop:10}} />
            <div className={transStyle.subTotalStyle}>
                <div className={transStyle.subTotalText}>TOTAL AMOUNT</div>
                <div className={transStyle.subTotalText}>INR 1.800,00</div>
            </div>
            <div className={transStyle.thankText}>
                Thank you very much for doing business with us. We look forward to working with you again!
            </div>
        </Box>
    </Modal>
  )
}

export default DownloadPdf