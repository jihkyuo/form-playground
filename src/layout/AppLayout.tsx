import React, { PropsWithChildren } from 'react';
import { Layout, Menu, MenuProps, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BarsOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

export function AppLayout({ children }: PropsWithChildren) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items: MenuProps['items'] = [
    {
      key: 'trip',
      label: '이용내역',
      icon: <BarsOutlined />,
      children: [
        {
          key: 'past',
          label: '지난내역',
        },
      ],
    },
  ];

  const menuNavigate: MenuProps['onClick'] = ({ keyPath }) => {
    const path = keyPath.reverse().join('/');
    navigate(path);
  };
  const activeMenu = pathname.split('/');

  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <HeaderLayout>
          <Logo>Playground</Logo>
          <h1>로그인</h1>
        </HeaderLayout>
      </Header>
      <Layout>
        <Sider theme={'light'}
               style={{ overflow: 'auto', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }}>
          <FormButton onClick={() => navigate('form')}>예약</FormButton>
          <Menu mode="inline"
                items={items}
                onClick={menuNavigate}
                selectedKeys={activeMenu}
                defaultOpenKeys={activeMenu}
          />
        </Sider>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <ContentLayout style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {children}
          </ContentLayout>
          <Footer style={{ textAlign: 'center' }}>
            JIO Playground ©{new Date().getFullYear()} Created by JIO
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

const ContentLayout = styled.div`
  padding: 24px;
`;

const FormButton = styled.div`
  margin: 20px;
  padding: 16px 20px;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  background-color: rgb(242, 245, 255);
  color: rgb(50, 107, 255);
  cursor: pointer;
  transition: 0.1s ease-in-out all;

  &:active {
    background-color: rgb(50, 107, 255);
    transform: scale(0.96);
    color: white;
  }
`;

const HeaderLayout = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 16px;
`;