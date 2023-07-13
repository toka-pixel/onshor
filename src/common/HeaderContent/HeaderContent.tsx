import { useState, useEffect } from "react";
import Image from "next/image";
// import CartMenu from "@/components/CartMenu/CartMenu";
// import KitchenMenu from "@/components/KitchenMenu/KitchenMenu";
import styles from "./HeaderContent.module.scss";

const HeaderContent = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change',handleResize);

    return () => mediaQuery.removeEventListener('change',handleResize);
  }, []);

  return (
    <div className={styles.headerContent}>
      <div className={styles.logo}>
       <Image src='/imgs/onshor.png'  alt='onshor'  width={20} height={20}/>
      </div>
   
      <div className={styles.actions}>
        {/* <CartMenu />
        <KitchenMenu /> */}
      </div>
    </div>
  );
};

export default HeaderContent;
