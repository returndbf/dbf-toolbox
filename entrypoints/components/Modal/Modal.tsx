import React from "react";
import Button from "@/entrypoints/components/Button/Button.tsx"
import "./Modal.css"

interface ModalProps {
    open: Boolean,
    onClose: () => void,
    onConfirm: () => void,
    children: React.ReactNode,
    title: string
}

const ButtonStyle: React.CSSProperties = {
    width: '55px',
    height: '22px',
    borderRadius: '8px',
    marginLeft: '10px'
}

const Modal = ({ open, children, onClose, title, onConfirm }: ModalProps) => {
    return (
        <>
            {
                open && <div className="modal-container">
                    <div className="modal-mask">
                        <div className='modal-content'>
                            <div className="modal-header">
                                <div className="modal-title">{title} </div>
                            </div>
                            <div className="modal-body">{children}</div>
                            <div className="modal-footer">
                                <div style={{ textAlign: 'end' }}>
                                    <Button backgroundColor="aqua" onClick={onConfirm} style={ButtonStyle}></Button>
                                    <Button backgroundColor="aqua" onClick={onClose} style={ButtonStyle}></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal