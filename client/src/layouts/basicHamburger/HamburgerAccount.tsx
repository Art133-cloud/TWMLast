"use client";
import { useState, useEffect } from "react";
import styles from "./HamburgerAccount.module.scss";
import Link from "next/link";
import Image from "next/image";
import AccountHeadImage from "../../../public/assets/png/accountHeadImage.png";
import Contacts from "../../components/basic/contacts/Contacts";
import FriendRequest from "../../components/friendRequest/FriendRequest";
import { JSX } from "react";
import { userContentItem } from "../../components/leftAccount/LeftAccount";
import { iconsWithBackground } from "../basicHeader/HeaderAccount";
type LinkType = {
  href: string;
  icon: JSX.Element;
  text: string;
  isContacts?: boolean;
  isFavorites?: boolean;
  isFriendRequest?: boolean;
  isVisible: boolean;
};
const HamburgerAccount = ({ LinksHead = [] }: { LinksHead: LinkType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isFriendRequestOpen, setIsFriendRequestOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (isOpen) {
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleContacts = () => setIsContactsOpen((prev) => !prev);
  const closeContacts = () => setIsContactsOpen(false);

  const toggleFavorites = () => setIsFavoritesOpen((prev) => !prev);
  const closeFavorites = () => setIsFavoritesOpen(false);

  const toggleFriendRequest = () => setIsFriendRequestOpen((prev) => !prev);
  const closeFriendRequest = () => setIsFriendRequestOpen(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className={styles.hamburgerLine}></span>
        ))}
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.ul}>
          {LinksHead.map(
            (
              {
                href,
                icon,
                text,
                isContacts,
                isFavorites,
                isFriendRequest,
                isVisible,
              },
              index
            ) => {
              if (!isVisible) return null;

              return (
                <li
                  key={index}
                  onClick={
                    isContacts
                      ? toggleContacts
                      : isFavorites
                      ? toggleFavorites
                      : isFriendRequest
                      ? toggleFriendRequest
                      : undefined
                  }
                >
                  <Link href={href}>
                    {icon}
                    <p>{text}</p>
                  </Link>
                </li>
              );
            }
          )}

          {isContactsOpen && (
            <div className={styles.contactsList}>
              <button className={styles.closeButton} onClick={closeContacts}>
                <p>X</p>
              </button>
              <Contacts />
            </div>
          )}

          {isFavoritesOpen && (
            <div className={styles.favoritesList}>
              <button className={styles.closeButton} onClick={closeFavorites}>
                <p>X</p>
              </button>
              <div className={styles.itemsFavoritesList}>
                  {userContentItem.map((item: any,index:number) => {
                    return (
                      <div className={styles.itemFavorite} key={index}>
                        {item.icon}
                        <h4>{item.text}</h4>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {isFriendRequestOpen && (
            <div className={styles.friendRequestList}>
              <button
                className={styles.closeButton}
                onClick={closeFriendRequest}
              >
                <p>X</p>
              </button>
              <FriendRequest />
            </div>
          )}

          <li>
            <Link href="/account">
              <Image
                src={AccountHeadImage}
                alt="Profile"
                width={35}
                height={35}
              />
              <p>Profile</p>
            </Link>
          </li>
          <li>
          <div className={styles.secondBlockLeftHeader}>
              <input type="search" placeholder="Start typing to search.." />
              <div className={styles.icons}>
                {iconsWithBackground.map((item, index) => (
                  <div key={index} className={styles.backgroundIcon}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerAccount;
