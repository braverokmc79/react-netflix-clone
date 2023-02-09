import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinkContainer>
                    <FooterLinkTitle>나우무비스 대한민국</FooterLinkTitle>
                    <FooterLinkContent>
                        {/* <FooterLink href="https://help.netflix.com/ko/node/412">
                            Now Movie 소개
                        </FooterLink> */}
                        <FooterLink href="https://help.netflix.com/ko">
                             소개
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            미디어 센터
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            이용 약관
                        </FooterLink>
                    </FooterLinkContent>
                    <FooterDescTop>
                   
                    나우무비스는 영화,드라마,예능,미드, 넷플릭스 등을 무료 스트리밍에 대한 
                    단순 구글 검색엔진을 통한  웹사이트 검색 링크주소만 제공하고 있습니다.<br />
                    나우무비스는 넷플릭스(Netflix),와차,디즈니플러스,웨이브 등 각종 OTT에
                    대한 단순 구글 검색엔진 링크 웹사이트 주소로서 그어떠한 동영상, 이미지, 파일등을 직접적으로 업로드 제공을 하지 않습니다.<br />
                    저적권 문의는 해당 링크의 웹사이트에서 문의해 주시길 바랍니다.
                    </FooterDescTop>


                    <FooterDescContainer>
                        <FooterDescRights>
                            Copyright ©  Now Movies. All rights reserved.
                        </FooterDescRights>
                    </FooterDescContainer>
                </FooterLinkContainer>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
  margin-top:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }

  

`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
   width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;

`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-bewteen;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 160px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
   @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescTop = styled.div`
  color: gray;
  font-size: 12px;
  text-align: lef;
  line-height: 2;
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
