import styled from "styled-components";
import {ProfileInfoView} from "./ProfileInfoView";
import {ProfileInfoMain} from "./ProfileInfoMain";
import {useState} from "react";
import React from "react";
import {ProfileInfoEdit} from "./ProfileInfoEdit";


export function Profile() {
    const [isEditMode, setIsEditMode] = useState(true)
    return (
        <ProfileBlock>
            <MainContainer>
                {isEditMode
                ? <ProfileInfoEdit offEditMode={() => setIsEditMode(false)}/>
                : <ProfileInfoView onEditMode={() => setIsEditMode(true)}/>
                }
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
