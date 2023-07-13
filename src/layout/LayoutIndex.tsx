import { Layout } from "antd";
import HeaderContent from "@/common/HeaderContent/HeaderContent";
import styles from "./Layout.module.scss";
import { ReactNode } from "react";

type IProps={

  children:ReactNode,
}

const LayoutIndex = (props:IProps) => {
  const {children}=props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className={styles.layout} style={{ minHeight: "100vh" }}>
      <Header className={styles.header}>
        <HeaderContent />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
       
      </Footer>
    </Layout>
  );
};

export default LayoutIndex;
