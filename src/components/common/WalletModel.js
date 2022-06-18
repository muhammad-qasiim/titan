import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import React from "react";

const WalletModel = (props, { handleMetaMask, show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      className="wallet"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ borderRadius: "5px" }}>
        <div className="top_row">
          <div className="left" onClick={() => console.log("abc")}>
            <div style={{ marginTop: "30px" }}>
              <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" />
            </div>
            <br />
            <div style={{ fontSize: "18px" }}>Metamask</div>
            Connect to your MetaMask Wallet
            <br />
            <br />
          </div>
          <div className="right">
            <div style={{ marginTop: "30px" }}>
              <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" />
            </div>
            <br />
            <br />
            <div style={{ fontSize: "18px" }}>Wallet Connect</div>
            Connect to your favorite Wallet
            <br />
            <br />
          </div>
        </div>

        {/* <div className="bottom_bar" style={{ textAlign: "center" }}>
          <br />
          <br />
          <div className="smallIcons">
            <img src="https://ik.imagekit.io/xanalia/visa-logo.png" />
            <img src="https://ik.imagekit.io/xanalia/mastercard-logo.svg.png" />
            <img src="https://ik.imagekit.io/xanalia/unionpay_logo.svg.png" />
          </div>
          <br />
          <div style={{ fontSize: "18px" }}>Log In With Your Account</div>
          Purchase by credit card
        </div> */}
      </div>
    </Modal>
  );
};

export default WalletModel;
