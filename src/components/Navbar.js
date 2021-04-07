import React from "react";
import "../App.css";

import {
  Nav,
  NavItem,
  Body,
  Collapsible,
  User,
  Flex,
  Background,
  FlexItem,
  SectionSeparator,
  Icon,
} from "playbook-ui";

// const toggleClass = () => {
//   //   const active = document.getElementsByClassName("submenu");
//   const parent = document.querySelectorAll(".parent-nav > * ");
//   const child_nodes = parent.childNodes;
//   parent.forEach((e) => {
//     e.addEventListener("click", (elem) => {
//       console.log(elem.target);
//     });
//   });
// };
const Navbar = () => {
  //  useEffect(() => {
  //     toggleClass();
  //   }, []);

  return (
    <div className="navbar-container">
      <Background
        backgroundColor="white"
        paddingBottom="none"
        paddingTop="none"
      >
        {/* Top vavigation */}
        <section className="top-nav">
          <Flex paddingLeft="md" paddingRight="md" className="top-nav-flex">
            <FlexItem>
              <Body>
                <aside>
                  <Icon icon="building" size="lg" className="icon-logo" />
                  <span>
                    <h3>PB&J</h3>
                    <p>INTERNATIONAL</p>
                  </span>
                </aside>
              </Body>
            </FlexItem>
          </Flex>
          <Flex className="icon-value-nav">
            <FlexItem>
              <Body color="light" className="body-flex">
                <Icon icon="bell" />
                <span>5</span>
              </Body>
            </FlexItem>
            <FlexItem>
              <Body color="light" className="body-flex">
                <Icon icon="box" />
                <span>2</span>
              </Body>
            </FlexItem>
          </Flex>
          <Flex paddingLeft="md">
            <FlexItem className="flex-user">
              <Collapsible className="collapse-nav">
                <Collapsible.Main className="main-collapsible">
                  <User
                    align="right"
                    className="user-nav"
                    orientation="horizontal"
                    avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                    name="Anna Black"
                    size="sm"
                  />
                </Collapsible.Main>
                <Collapsible.Content>
                  {/* <a href="#">Logout</a> */}
                </Collapsible.Content>
              </Collapsible>
            </FlexItem>
          </Flex>
        </section>
        <SectionSeparator />
        {/* bottom nav */}
        <section className="bottom-nav">
          <Flex paddingLeft="0" paddingRight="md" spacing="between">
            <FlexItem>
              <Body>
                <Nav link="#" orientation="horizontal">
                  <NavItem link="#" text="Dashboard" active />
                  <NavItem link="#" text="Products" />
                  <NavItem link="#" text="In Progress" />
                  <NavItem link="#" text="Settings" />
                </Nav>
              </Body>
            </FlexItem>
            <FlexItem></FlexItem>
          </Flex>
        </section>
      </Background>
      <SectionSeparator />
    </div>

    // <div className="navbar-container">
    //   <Background backgroundColor="white">
    //     <Body>
    //       {/* <Nav orientation="horizontal" className="parent-nav">
    //         <NavItem link="#" text="Dashboard" active />
    //         <NavItem link="#" text="Products" />
    //         <NavItem link="#" text="In Progress" />
    //         <NavItem link="#" text="Settings" />
    //       </Nav> */}
    //     </Body>
    //   </Background>
    //   <SectionSeparator />
    //   {/* <Nav>
    //     <NavItem iconLeft="bar" text="PB&J" />
    //     <NavItem iconRight="angle-down">
    //       <User
    //         align="left"
    //         avatarUrl="https://s3-hq-f5.powerhrg.com/nitro-production/avatars/55553/badge/business-technology-jonathan-zazula.jpg?AWSAccessKeyId=IWSW00NEQHMEYQTLZ7E9&Signature=S0EN3l5sfIr7yk442Q2MeledXGc%3D&Expires=3161514974"
    //         name="Jon Zazula"
    //         orientation="horizontal"
    //         size="sm"
    //       />
    //     </NavItem>
    //   </Nav> */}
    // </div>
  );
};

export default Navbar;
