import styled from "styled-components";

export function ProfileInfo() {
    return (
        <SideBar>
            <UserInfo>

            </UserInfo>
        </SideBar>
    )
}

const SideBar = styled.aside`
  opacity: 1;
  position: relative;
  -webkit-flex: 0 0 298px;
  -ms-flex: 0 0 298px;
  flex: 0 0 298px;
  height: auto;
  z-index: 1;
  display: block;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  background: #fff;
  border-left: 1px solid rgba(0,0,0,.1);
  width: 200px;
  overflow: auto;
  padding: 16px;
`
const UserInfo = styled.div`
  
`
