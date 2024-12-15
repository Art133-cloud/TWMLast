"use client"
import { useState } from "react";
import styles from "./Notifications.module.scss";
import Image from "next/image";
import FirstUser from "../../../public/assets/png/firstUserRequest.png";

export default function NotificationsBlock() {
  interface ItemProps {
    id: number;
    icon: string;
    avatar: JSX.Element;
    background: string;
    text: string;
    isSelected?: boolean;
    isUnread?: boolean;
    isBlocked?: boolean;
  }

  let currentId = 0;

  const generateItems = (items: Omit<ItemProps, "id" | "isUnread" | "isBlocked">[]): ItemProps[] => {
    return items.map((item) => ({
      ...item,
      id: ++currentId,
      isUnread: true,
      isBlocked: false,
    }));
  };

const initialItems = generateItems([
    {
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#e8f1fa",
  text: "Hurin Seary",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.blackIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.oflineIcon,
  avatar: (
    <div className={styles.avatarWithSymbol}        >
      <p>V</p>
    </div>
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <div className={styles.avatarWithSymbol}        >
      <p>V</p>
    </div>
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <Image src={FirstUser.src} alt="FirstUser" width={35} height={35} />
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
{
  icon: styles.onlineIcon,
  avatar: (
    <div className={styles.avatarWithSymbol}        >
      <p>V</p>
    </div>
  ),
  background: "#fff",
  text: "Victor Exrixon",
},
]);

  const [items, setItems] = useState(initialItems);

  const resetSelection = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: false }))
    );
  };

  const toggleSelect = (id: number) => {
    setItems((prevItems) => {
      const selectedItem = prevItems.find((item) => item.id === id);
      if (selectedItem) {
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, isSelected: !item.isSelected }
            : item
        );
      }
      return prevItems;
    });
  };

  const getSelectedItems = () => {
    return items.filter((item) => item.isSelected);
  };

  const getSelectedItemsWithSameStatus = () => {
    const selected = getSelectedItems();
    if (selected.length === 0) return [];

    const allBlocked = selected.every(item => item.isBlocked);
    const allUnread = selected.every(item => item.isUnread);

    if (allBlocked || !allBlocked) {
      return selected.filter(item => item.isBlocked === allBlocked);
    }

    return selected.filter(item => item.isUnread === allUnread);
  };

  const getItemsWithDifferentStatus = () => {
    const selected = getSelectedItems();
    if (selected.length <= 1) return null;

    const hasBlocked = selected.some(item => item.isBlocked);
    const hasUnread = selected.some(item => item.isUnread);

    if (hasBlocked && hasUnread) {
      return selected.find(item => item.isBlocked !== item.isUnread);
    }

    return null;
  };

  const toggleUnread = () => {
    const selectedItems = getSelectedItemsWithSameStatus();
    const differentStatusItem = getItemsWithDifferentStatus();

    if (selectedItems.length === 0) return;

    if (differentStatusItem) {
      const selectedUnread = differentStatusItem.isUnread;
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === differentStatusItem.id
            ? { ...item, isUnread: !selectedUnread }
            : item
        )
      );
    } else {
      const selectedUnread = selectedItems.every(item => item.isUnread);
      setItems((prevItems) =>
        prevItems.map((item) =>
          selectedItems.includes(item)
            ? { ...item, isUnread: !selectedUnread }
            : item
        )
      );
    }
  };

  const toggleBlock = () => {
    const selectedItems = getSelectedItemsWithSameStatus();
    const differentStatusItem = getItemsWithDifferentStatus();

    if (selectedItems.length === 0) return;

    if (differentStatusItem) {
      const selectedBlocked = differentStatusItem.isBlocked;
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === differentStatusItem.id
            ? { ...item, isBlocked: !selectedBlocked }
            : item
        )
      );
    } else {
      const selectedBlocked = selectedItems.every(item => item.isBlocked);
      setItems((prevItems) =>
        prevItems.map((item) =>
          selectedItems.includes(item)
            ? { ...item, isBlocked: !selectedBlocked }
            : item
        )
      );
    }
  };

  const removeSelected = () => {
    setItems((prevItems) => prevItems.filter((item) => !item.isSelected));
  };

  const hasSelectedItems = items.some((item) => item.isSelected);

  // Получение статуса последнего выбранного пользователя
  const getLastSelectedStatus = () => {
    const selectedItems = getSelectedItems();
    if (selectedItems.length > 0) {
      const lastSelectedItem = selectedItems[selectedItems.length - 1];
      return lastSelectedItem.isBlocked ? "blocked" : "unblocked";
    }
    return null;
  };

  const lastSelectedStatus = getLastSelectedStatus();

  return (
    <div className={styles.parentNotificationsBlock}>
      {hasSelectedItems && (
        <div className={styles.topActions}>
          <button onClick={removeSelected} className={styles.deleteButton}>
            Удалить
          </button>
          {items.some((item) => item.isSelected && !item.isBlocked) && (
            <button onClick={toggleUnread} className={styles.unreadButton}>
              {items.some((item) => item.isSelected && item.isUnread)
                ? "Отметить как прочитанное"
                : "Отметить как непрочитанное"}
            </button>
          )}
          {/* Логика для отображения текста на кнопке в зависимости от статуса последнего выбранного */}
          <button
            onClick={toggleBlock}
            className={styles.blockButton}
          >
            {lastSelectedStatus === "blocked" ? "Разблокировать" : "Заблокировать"}
          </button>
        </div>
      )}
      <div
        className={styles.contentNotificationsBlock}
        style={{
          maxHeight: hasSelectedItems ? "676px" : "776px", // Change max-height based on selection
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.itemNotification} ${item.isSelected ? styles.selected : ""} ${item.isUnread ? styles.unread : ""} ${item.isBlocked ? styles.blocked : ""}`}
            style={{ background: item.background }}
          >
            <div className={styles.firstBlockNotifications}>
              <div
                className={styles.checkBox}
                onClick={() => toggleSelect(item.id)}
                style={{
                  pointerEvents: item.isBlocked ? "auto" : "auto",
                }}
              >
                {item.isSelected && <div className={styles.checkMark}></div>}
              </div>
              <div className={item.icon}></div>
              {item.avatar}
              <h4>{item.text}</h4>
            </div>
            <div className={styles.secondBlockNotifications}>
              <h2>Mobile Apps Redesign</h2>
              <p>
                Hey Cak, Could you free now? Can you look and read the brief first
                before...
              </p>
            </div>
            <div className={styles.thirdBlockNotifications}>
              <p>12:48PM</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
