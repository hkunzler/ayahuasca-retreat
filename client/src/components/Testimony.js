import React from "react";
import "./../testimony.css";
import { Carousel } from "react-materialize";

const Testimony = () => {
  return (
    <div className="testimony-background">
      <div id="testimony">
        <div
          className="white-layer"
          style={{
            background: "rgba(255, 255, 255, 0.67)",
            width: "100 %",
            margin: "0 !important",
            height: "85vh"
          }}
        >
          <h4 >Testimonials</h4>
          <Carousel
            options={{
              fullWidth: true,
              indicators: true
            }}
            className="center"
          >
            <div>
              <p>
                My life was transformed after one ceremony. I was suffering from
                Lyme's disease and after one session. My whole being was so
                grounded and lifted. I highly recommend this medicine. It's life
                changing and I love how the ceremony was so sacred and personal.
                Thank you for sharing your love. Thank you. Keep up the magic,
              </p>
              <br />
              <p style={{ fontWeight: "bolder" }}>~ Kopo Magic</p>
            </div>
            <div>
              <p>
                Bree is an amazing person, who is only looking to help others
                through sacred medicines. If you are looking to be healed
                physically, mentally, or emotionally; I highly recommend
                reaching out to this page and giving it a try, truly life
                changing stuff! I can vouch that the kambo session is very
                unique, helps you to clear your inner demons, and help you to
                become your very best self.
              </p>
              <br />
              <p style={{ fontWeight: "bolder" }}>~ Jack Gardner</p>
            </div>
            <div>
              <p>
                The medicine came when I needed healing and the intimate space
                provided when needing love, this experience altered my path for
                the better, helping me to see more clear, be more present and
                welcome self love into my life! Grateful I crossed paths with
                this sweet soul. I highly recommend Brianna as a space holder
                and the medicines provided, much blessing on your healing
                journey!
              </p>
              <br />
              <p style={{ fontWeight: "bolder" }}>~ Steph Renfro</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
