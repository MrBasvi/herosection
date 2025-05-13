import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { createStyles } from 'antd-style';
import './App.css';

const useStyle = createStyles(({ prefixCls, css }) => ({
  gradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      position: relative;
      overflow: hidden;

      > span {
        position: relative;
        z-index: 1;
      }

      &::before {
        content: '';
        background: linear-gradient(120deg, #04befe 10%, rgb(225, 0, 255) 90%);
        position: absolute;
        inset: 0;
        z-index: 0;
        transition: all 0.3s;
        animation: pulse 3s infinite ease-in-out;   
        opacity: 0.9;
      }

      &:hover::before {
        opacity: 0.6;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.9;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.7;
      }
      100% {
        transform: scale(1);
        opacity: 0.9;
      }
    }
  `,
}));

const HeroSection: React.FC = () => {
  const { styles } = useStyle();

  const menuItems = [
    { label: 'About us', delay: 0.1 },
    { label: 'Service', delay: 0.2 },
    { label: 'Pet Care', delay: 0.3 },
    { label: 'Pet medical', delay: 0.4 },
    { label: 'Pricing', delay: 0.5 },
  ];

  const iconCards = [
    { icon: '🐶', label: 'Grooming', delay: 0.1 },
    { icon: '💉', label: 'Healthcare', delay: 0.2 },
    { icon: '🧸', label: 'Daycare', delay: 0.3 },
    { icon: '🎓', label: 'Training', delay: 0.4 },
  ];

  return (
    <div className="hero-wrapper">
      <motion.nav 
        className="hero-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="hero-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🐾 Miawsome
        </motion.div>
        <div className="hero-menu">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Button type="primary" className={styles.gradientButton}>
                {item.label}
              </Button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button type="primary" className={styles.gradientButton} shape="round">
            Contact
          </Button>
        </motion.div>
      </motion.nav>

      <div className="hero-content">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Paws-itively<br />the Best Pet<br />Care in Town
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're headed for a vacation, need a day to yourself,
            or simply want to treat your pet to some extra TLC, our pet care center is the destination of choice.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button type="primary" shape="round" size="large" className={styles.gradientButton}>
              Book Appointment
            </Button>
            <Button type="link">Learn more →</Button>
          </motion.div>

          <motion.div 
            className="hero-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {iconCards.map((card, index) => (
              <motion.div
                key={card.label}
                className="icon-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {card.icon} {card.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <motion.div 
            className="hero-cat-wrapper"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={require("./assets/cat.jpg")}
              alt="cute cat"
              className="hero-cat-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
