import styles from "./FriendRequest.module.scss";
import Image from "next/image";
import BasicConfirmButton from "../basic/basicConfirmButton/BasicConfirmButton";
import BasicDeleteButton from "../basic/basicDeleteButton/BasicDeleteButton";
import User from "../../../public/assets/png/firstUserRequest.png"
export default function FriendRequest () {
    interface FriendRequest {
        author: string;
        alt: string;
        authorName: string;
        when: string;
      }
      
      const itemFriendRequest: FriendRequest[] = [
        {
          author: User.src,
          alt: "User",
          authorName: "Anthony Daugloi",
          when: "12 mutual friends",
        },
        {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },        {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
          {
            author: User.src,
            alt: "User",
            authorName: "Anthony Daugloi",
            when: "12 mutual friends",
          },
      ];
    return (
        <div className={styles.itemsFriendRequest}>
        {itemFriendRequest.map((item, index) => {
          return (
            <div className={styles.itemFriendRequest} key={index}>
              <div className={styles.topItem}>
                <Image
                  src={item.author}
                  alt={item.alt}
                  width={35}
                  height={35}
                />
                <div className={styles.userNameAndWhen}>
                  <h3>{item.authorName}</h3>
                  <p>{item.when}</p>
                </div>
              </div>
              <div className={styles.buttons}>
                <BasicConfirmButton />
                <BasicDeleteButton />
              </div>
            </div>
          );
        })}
      </div>
    )
}