import React, { memo } from 'react';
import MusicPlay from 'components/playList/musicPlay';

import './playList.css';

function PlayList(props) {
  return (
    <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Most Popular</div>

        <div className="list-sub">92 songs</div>

        <div className="play-list">
          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">01</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">02</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">03</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">04</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">05</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">06</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>

          <div className="play-item">
            <span className="play-block">
              <span className="index text-strong">07</span>

              <img
                src="https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                alt="My Stress"
                className="thumbnail"
              />

              <i className="fa-solid fa-play play-icon"></i>

              <span className="music-name text-strong">My Stress</span>
            </span>

            <span className="play-author">NF Real music</span>

            <span className="timer">3:22</span>

            <i className="fa-solid fa-heart icon-like"></i>
          </div>
        </div>
      </div>

      <div className="music-playing">
        <MusicPlay />
      </div>
    </div>
  );
}

export default memo(PlayList);
