import Container from "@/components/basic/container/Container";
import HeaderAccount from "@/layouts/basicHeader/HeaderAccount";
import NotificationIcon from "../../../public/assets/svg/NotificationIcon";
import MessagesIcon from "../../../public/assets/svg/MessagesIcon";
import SettingsIcon from "../../../public/assets/svg/SettingsIcon";
import ContactIcon from "../../../public/assets/svg/ContactIcon";
import FavoritesIcon from "../../../public/assets/svg/FavoritesIcon";
import FriendRequestIcon from "../../../public/assets/svg/FriendRequestIcon";
import SettingsBottom from "@/components/settingsBottom/SetingsBottom";
export default function Notifications() {
  type LinkType = {
    href: string;
    icon: JSX.Element;
    text: string;
    isContacts?: boolean;
    isFavorites?: boolean;
    isFriendRequest?: boolean;
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
      href: "/notifications",
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
      href: "/notifications",
      icon: <ContactIcon />,
      text: "Contacts",
      isContacts: true,
      isVisible: false,
    },
    {
      href: "/notifications",
      icon: <FavoritesIcon />,
      text: "Favorites",
      isFavorites: true,
      isVisible: false,
    },
    {
      href: "/notifications",
      icon: <FriendRequestIcon />,
      text: "Friend Request",
      isFriendRequest: true,
      isVisible: false,
    },
  ];

  return (
    <>
      <HeaderAccount LinksHead={LinksHead} />
      <Container>
        <SettingsBottom />
      </Container>
    </>
  );
}
