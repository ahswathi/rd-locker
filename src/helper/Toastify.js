import React from 'react'
import { toast } from 'react-toastify'

class Toastify {
    success(title, desc) {
        return toast.success(<Success title={title} desc={desc} />, {
            icon: ({ theme, type }) => <img src="/assets/icons/success.svg" />
        })
    }

    warning(title, desc) {
        return toast.warning(<Warning title={title} desc={desc} />, {
            icon: ({ theme, type }) => <img src="/assets/icons/warning.svg" />
        })
    }

    error(title, desc) {
        return toast.error(<Error title={title} desc={desc} />, {
            icon: ({ theme, type }) => <img src="/assets/icons/error.svg" />
        })
    }
}

const Success = ({ title = "", desc = "" }) => {
    return (
        <div className='toast_success' style={{ marginLeft: 20 }}>
            <h4 style={{ color: "#fff", fontSize: "14px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{title}</h4>
            <p style={{ color: "#C8C5C5", fontSize: "12px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{desc}</p>
        </div>
    )
}

const Warning = ({ title = "", desc = "" }) => {
    return (
        <div style={{ marginLeft: 20 }}>
            <h4 style={{ color: "#fff", fontSize: "14px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{title}</h4>
            <p style={{ color: "#C8C5C5", fontSize: "12px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{desc}</p>
        </div>
    )
}

const Error = ({ title = "", desc = "" }) => {
    return (
        <div style={{ marginLeft: 20 }}>
            <h4 style={{ color: "#fff", fontSize: "14px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{title}</h4>
            <p style={{ color: "#C8C5C5", fontSize: "12px", padding: 0, margin: 0, fontFamily: "Poppins" }}>{desc}</p>
        </div>
    )
}

export default new Toastify();
