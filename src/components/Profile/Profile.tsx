import styled from "styled-components";

export function Profile() {
    return (
        <ProfileBlock>
            <MainContainer>

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
