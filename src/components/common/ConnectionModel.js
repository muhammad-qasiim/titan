import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ConnectionModel = () => {
  const history = useHistory()
  const getStatus = localStorage.getItem('should');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getStatus == 'true') {
      setShow(true);
      localStorage.setItem('should', false);
    }
  }, [getStatus])

  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose} animation={false} className="welcome-modal">
      <div style={{ background: '#1f1f1f' }}>
        <Modal.Header style={{ border: 'thin solid #191919' }}>
          <div style={{ display: 'flex' }}>
            <img src="/assets/images/favicon.png" width={40} />
            <h6 style={{ marginLeft: '5px', marginTop: '16px' }}>Connect Your Wallet</h6>
          </div>
          <button style={{ background: 'transparent', color: 'white', border: 'unset' }} onClick={handleClose}>X</button>
        </Modal.Header>
        <Modal.Body style={{ background: '#1f1f1f', borderRadius: '5px' }}>
          <div style={{ display: 'flex', cursor: 'pointer' }} onClick={() => {history.push('/login'); setShow(false)}}>
            <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" width={30} />
            <h6 style={{ marginLeft: '30px', marginTop: '5px' }}>MetaMask Wallet</h6>
          </div>
          <div style={{ display: 'flex', cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }} onClick={() => {history.push('/login'); setShow(false)}}>
            <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" width={30} />
            <h6 style={{ marginLeft: '30px', marginTop: '5px' }}>Wallet Connect</h6>
          </div>
        </Modal.Body>
      </div>
    </Modal >
  )
}
export default ConnectionModel