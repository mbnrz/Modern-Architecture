import React from "react";
import photo11 from "../../assets/images/1.jpg";
import "./ContentUs.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillCameraVideoFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const ContentUs = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={35} className="iconnn" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0914 274 84 04</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={35} className="iconnn" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0914 274 84 04</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={35} className="iconnn" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0914 274 84 04</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillCameraVideoFill size={35} className="iconnn" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">0914 274 84 04</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src={photo11} alt="" />
          </div>
        </div>
      </div>
    </div>

    //? <section className="c-wrapper">
    //?   <div className="paddings innerWidth flexCenter c-container">
    //?     <div className="flexColStart c-left">
    //?       <span className="orangeText">Our Contact Us</span>
    //?       <span className="primaryText">Easy to contact us</span>
    //?       <span className="secondaryText" style={{marginRight:"-20px"}}>
    //?         We always ready to help by providijng the best services for you. We
    //?         beleive a good
    //?         <br />
    //?         blace to live can make your life better
    //?       </span>
    //?       <div className="flexStart contactModes">
    //?         <div className="flexStart row">
    //?           {/* first mode */}

    //?           <div className="flexColCenter mode">
    //?             <div className="flexStart">
    //?               <div  style={{marginLeft:"10px"}} className="flexCenter icon">
    //?                 <MdCall size={25} />
    //?               </div>
    //?               <div className="flexColStart detail">
    //?                 <span className="primaryText">Call</span>
    //?                 <span className="secondaryText">0914 274 84 04</span>
    //?               </div>
    //?             </div>
    //?             <div className="flexCenter button">Call Now</div>
    //?           </div>
    //?           {/* second mode */}

    //?           <div className="flexColCenter mode">
    //?             <div className="flexStart">
    //?               <div  style={{marginLeft:"10px"}} className="flexCenter icon">
    //?                 <BsFillChatDotsFill size={25} />
    //?               </div>
    //?               <div className="flexColStart detail">
    //?                 <span className="primaryText">Chat</span>
    //?                 <span className="secondaryText">0914 274 84 04</span>
    //?               </div>
    //?             </div>
    //?             <div className="flexCenter button">Chat Now</div>
    //?           </div>

    //?         </div>
    //?         <div className="flexStart row">
    //?           {/* Third mode */}

    //?           <div className="flexColCenter mode">
    //?             <div className="flexStart">
    //?               <div  style={{marginLeft:"10px"}} className="flexCenter icon">
    //?                 <BsFillCameraVideoFill size={25} />
    //?               </div>
    //?               <div className="flexColStart detail">
    //?                 <span className="primaryText">Video Call</span>
    //?                 <span className="secondaryText">0914 274 84 04</span>
    //?               </div>
    //?             </div>
    //?             <div className="flexCenter button">Video Call Now</div>
    //?           </div>
    //?           {/* fourth mode */}

    //?           <div className="flexColCenter mode">
    //?             <div className="flexStart">
    //?               <div  style={{marginLeft:"10px"}} className="flexCenter icon">
    //?                 <HiChatBubbleBottomCenter size={25} />
    //?               </div>
    //?               <div className="flexColStart detail">
    //?                 <span className="primaryText">Message</span>
    //?                 <span className="secondaryText">0914 274 84 04</span>
    //?               </div>
    //?             </div>
    //?             <div className="flexCenter button">Message Now</div>
    //?           </div>

    //?         </div>
    //?       </div>
    //?     </div>
    //?     <div className="c-right">
    //?       <div className="image-container">
    //?         <img src={photo11} />
    //?       </div>
    //?     </div>
    //?   </div>
    //? </section>
  );
};

export default ContentUs;
