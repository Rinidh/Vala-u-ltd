import { HStack } from "@chakra-ui/react";
import ThemeSwitch from "./themeSwitch";
import Logo from "./Logo";

// waiting for logo and other resources
// import darkLogo from "../assets/Github-logo-dark.png";
// import logo from "../assets/Github-logo.png";
// import SearchInput from "./SearchInput";
// import About from "./About";
// import "../stylings/Header.css";

// interface Props {
//   onSearch: (searchText: string) => void;
//   onChangeGithubModeStatus: () => void;
// }

const Header = () => {
  return (
    <HStack direction={"row"}>
      <Logo />
      <ThemeSwitch />
    </HStack>
  );
};

/**
 
 */

export default Header;
