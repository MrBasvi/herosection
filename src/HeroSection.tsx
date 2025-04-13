import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
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
  return (
    <div className="hero-wrapper">
      <nav className="hero-navbar">
        <div className="hero-logo">🐾 Miawsome</div>
        <div className="hero-menu">
          <Button type="primary" className={styles.gradientButton}>About us</Button>
          <Button type="primary" className={styles.gradientButton}>Service</Button>
          <Button type="primary" className={styles.gradientButton}>Pet Care</Button>
          <Button type="primary" className={styles.gradientButton}>Pet medical</Button>
          <Button type="primary" className={styles.gradientButton}>Pricing</Button>
        </div>
        <Button type="primary" className={styles.gradientButton} shape="round">Contact</Button>
      </nav>

      <div className="hero-content">
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Paws-itively<br />the Best Pet<br />Care in Town
          </motion.h1>
          <p>
            Whether you're headed for a vacation, need a day to yourself,
            or simply want to treat your pet to some extra TLC, our pet care center is the destination of choice.
          </p>
          <div className="hero-buttons">
            <Button type="primary" shape="round" size="large" className={styles.gradientButton}>Book Appointment</Button>
            <Button type="link">Learn more →</Button>
          </div>

          <div className="hero-icons">
            <div className="icon-card">🐶 Grooming</div>
            <div className="icon-card">💉 Healthcare</div>
            <div className="icon-card">🧸 Daycare</div>
            <div className="icon-card">🎓 Training</div>
          </div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
        <div className="hero-cat-wrapper">
            <img
                src={require("./assets/cat.jpg")}
                alt="cute cat"
                className="hero-cat-img"
            />
        <div className="hero-video-button">
        <PlayCircleOutlined style={{ fontSize: 24 }} />
    <span>Watch our video</span>
    </div>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
