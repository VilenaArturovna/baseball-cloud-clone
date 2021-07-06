import styled from "styled-components";
import {ProfileInfoView} from "./ProfileInfoView";
import {ProfileInfoMain} from "./ProfileInfoMain";
import {useState} from "react";

export function Profile() {
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <ProfileBlock>
            <MainContainer>
                <ProfileInfoView />
                <ProfileInfoMain />
            </MainContainer>
        </ProfileBlock>
    )
}

const ProfileBlock = styled.div`
  box-sizing: inherit;
  grid-area: content;
  background: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`
const MainContainer = styled.div`
  flex: 2;
  display: flex;
  overflow: hidden;
  height: 100%;
`
