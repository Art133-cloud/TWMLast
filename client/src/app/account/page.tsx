import HeaderAccount from "@/layouts/basicHeader/HeaderAccount"
import BottomAcount from "@/components/bottomAccount/BottomAcount"
import NotificationIcon from "../../../public/assets/svg/NotificationIcon";
import MessagesIcon from "../../../public/assets/svg/MessagesIcon";
import SettingsIcon from "../../../public/assets/svg/SettingsIcon";
import ContactIcon from "../../../public/assets/svg/ContactIcon";
import FavoritesIcon from "../../../public/assets/svg/FavoritesIcon";
import FriendRequestIcon from "../../../public/assets/svg/FriendRequestIcon";
export default function Account () {
    type LinkType = {
        href: string;
        icon: JSX.Element;
        text: string;
        isVisible: boolean;
      };
      const LinksHead: LinkType[] = [
        {
          href: "/notifications",
          icon: <NotificationIcon />,
          text: "Notifications",
          isVisible: true,
        },
        {
          href: "/account",
          icon: <MessagesIcon />,
          text: "Messages",
          isVisible: true,
        },
        {
          href: "/settings",
          icon: <SettingsIcon />,
          text: "Settings",
          isVisible: true,
        },
        {
          href: "/account",
          icon: <ContactIcon />,
          text: "Contacts",
          isVisible: true,
        },
        {
          href: "/account",
          icon: <FavoritesIcon />,
          text: "Favorites",
          isVisible: true,
        },
        {
          href: "/account",
          icon: <FriendRequestIcon />,
          text: "Friend Request",
          isVisible: true,
        },
      ];
    return (
        <>
            <HeaderAccount LinksHead={LinksHead} />
            <BottomAcount />
        </>
    )
}