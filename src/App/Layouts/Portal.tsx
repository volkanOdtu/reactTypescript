import { styled } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const PortalLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const PortalLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 100,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 0,
  },
}));

const PortalLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const PortalLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const PortalLayout = () => {
  return (
    <PortalLayoutRoot>
      <Navbar />
      <Sidebar />
      <PortalLayoutWrapper>
        <PortalLayoutContainer>
          <PortalLayoutContent>
            <Outlet />
          </PortalLayoutContent>
        </PortalLayoutContainer>
      </PortalLayoutWrapper>
    </PortalLayoutRoot>
  );
};

export default PortalLayout;
