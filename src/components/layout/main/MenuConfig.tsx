import Iconify from "../../Iconify";

type IconSize = {
  width: number;
  height: number;
};

const ICON_SIZE: IconSize = {
  width: 22,
  height: 22,
};

interface ObjectProps {
  title: string;
  icon: JSX.Element;
  path: string;
}

const menuConfig: ObjectProps[] = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },
];

export default menuConfig;
