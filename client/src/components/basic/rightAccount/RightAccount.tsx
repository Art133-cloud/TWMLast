"use client"
import { useState, useEffect } from "react";
import styles from "./RightAccount.module.scss";
import User from "../../../../public/assets/png/firstUserRequest.png";
import Image from "next/image";

interface Users {
  image: string;
  alt: string;
  userName: string;
  icon: JSX.Element;
}

export const users: Users[] = [
  { image: User.src, alt: "User", userName: "Hurin Seary", icon: <div className={styles.icon}><p>2</p></div> },
  { image: User.src, alt: "User", userName: "Victor Exrixon", icon: <div className={styles.iconOnline}></div> },
  { image: User.src, alt: "User", userName: "Surfiya Zakir", icon: <div className={styles.iconOfline}></div> },
  { image: User.src, alt: "User", userName: "Goria Coast", icon: <div className={styles.iconOnline}></div> },
  { image: User.src, alt: "User", userName: "Hurin Seary", icon: <div className={styles.lastOnline}><p>4:09 pm</p></div> },
  { image: User.src, alt: "User", userName: "David Goria", icon: <div className={styles.lastOnline}><p>2 days</p></div> },
  { image: User.src, alt: "User", userName: "Seary Victor", icon: <div className={styles.iconOnline}></div> },
  { image: User.src, alt: "User", userName: "Ana Seary", icon: <div className={styles.iconOnline}></div> }
];

const UserItem = ({ image, alt, userName, icon }: { image: string, alt: string, userName: string, icon: React.ReactNode }) => (
  <div className={styles.contact}>
    <div className={styles.userAndName}>
      <Image src={image} alt={alt} width={35} height={35} />
      <h4>{userName}</h4>
    </div>
    {icon}
  </div>
);

const GroupItem = ({ groupText, userName, className, icon }: { groupText: string, userName: string, className: string, icon: React.ReactNode }) => (
  <div className={styles.users}>
    <div className={styles.contact}>
      <div className={styles.userAndName}>
        <div className={`${styles.groupAvatar} ${className}`}>
          <p>{groupText}</p>
        </div>
        <h4>{userName}</h4>
      </div>
      {icon}
    </div>
  </div>
);

export const groups = [
  { groupText: "UD", userName: "Studio Express", className: styles.firstGroup, icon: <div className={styles.lastOnline}><p>2 min</p></div> },
  { groupText: "UD", userName: "Armany Design", className: styles.secondGroup, icon: <div className={styles.iconOfline}></div> },
  { groupText: "UD", userName: "Armany Design", className: styles.thirdGroup, icon: <div className={styles.iconOnline}></div> }
];

export const pages = [
  { groupText: "UD", userName: "Armany Seary", className: styles.firstGroup, icon: <div className={styles.iconOnline}></div> },
  { groupText: "UD", userName: "Entropio Inc", className: styles.secondGroup, icon: <div className={styles.iconOnline}></div> }
];

interface RightAccountProps {
  scrollThreshold: number;
  initialPosition: "static" | "relative" | "fixed";
}

export default function RightAccount({ scrollThreshold, initialPosition }: RightAccountProps) {
  const [position, setPosition] = useState<"static" | "relative" | "fixed">(initialPosition);
  const [topPosition, setTopPosition] = useState<string>("0px");
  useEffect(() => {
    const handleScroll = () => {
      if (initialPosition !== "static" && window.scrollY > scrollThreshold) {
        setPosition("fixed");
        setTopPosition("20px");
      } else {
        setPosition(initialPosition);
        setTopPosition("0px");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold, initialPosition]);

  return (
    <div className={styles.parentRightAccount}>
      <div
        className={styles.contentRightAccount}
        style={{
          position: position,
          top: topPosition
        }}
      >
        <div className={styles.contacts}>
          <h2>CONTACTS</h2>
          <div className={styles.users}>
            {users.map((user, index) => (
              <UserItem key={index} {...user} />
            ))}
          </div>
        </div>

        <div className={styles.groups}>
          <h2>GROUPS</h2>
          <div className={styles.users}>
            {groups.map((group, index) => (
              <GroupItem key={index} {...group} />
            ))}
          </div>
        </div>

        <div className={styles.pages}>
          <h2>PAGES</h2>
          <div className={styles.users}>
            {pages.map((page, index) => (
              <GroupItem key={index} {...page} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
