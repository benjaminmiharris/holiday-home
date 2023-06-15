import React from "react";
import Comment from "../../comment/Comment";
import styles from "./Testemonials.module.css";

const Testemonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlock}>
        <div className={styles.leftIcon}>
          <svg
            width="120"
            height="255"
            viewBox="0 0 120 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.7168 255C46.7257 255 31.8584 247.562 19.1151 231.625C6.37169 215.687 0 195.5 0 168.938C0 146.625 11.6814 113.687 36.1062 68C59.469 22.3125 77.5221 0 89.2035 0C95.5752 0 98.7611 3.1875 98.7611 10.625C98.7611 12.75 92.3894 27.625 78.5841 55.25C64.7788 82.875 58.4071 104.125 58.4071 120.062C58.4071 131.75 65.8407 142.375 81.7699 149.812C96.6372 157.25 107.257 165.75 112.566 174.25C117.876 182.75 120 191.25 120 200.813C120 217.813 114.69 231.625 105.133 242.25C93.4513 249.687 79.646 255 63.7168 255Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
        <div className={styles.rightIcon}>
          <svg
            width="120"
            height="255"
            viewBox="0 0 120 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.7168 255C46.7257 255 31.8584 247.562 19.1151 231.625C6.37169 215.687 0 195.5 0 168.938C0 146.625 11.6814 113.687 36.1062 68C59.469 22.3125 77.5221 0 89.2035 0C95.5752 0 98.7611 3.1875 98.7611 10.625C98.7611 12.75 92.3894 27.625 78.5841 55.25C64.7788 82.875 58.4071 104.125 58.4071 120.062C58.4071 131.75 65.8407 142.375 81.7699 149.812C96.6372 157.25 107.257 165.75 112.566 174.25C117.876 182.75 120 191.25 120 200.813C120 217.813 114.69 231.625 105.133 242.25C93.4513 249.687 79.646 255 63.7168 255Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
      </div>
      <div className={styles.commentsBlock}>
        <Comment
          title={"Best Place in RBS A"}
          numberOfStars={5}
          quote={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."`}
          guestName={"Jordan Gold"}
        />
        <Comment
          title={"Decent BBQ"}
          numberOfStars={4}
          quote={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."`}
          guestName={"Benj Harris"}
        />
      </div>
    </div>
  );
};

export default Testemonials;
