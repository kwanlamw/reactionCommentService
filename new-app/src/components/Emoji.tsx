import React, { memo, useEffect } from "react";
import {
  ToggleButtonGroup,
  IconButton,
  ToggleButton,
  Popover,
  Badge,
  styled,
  BadgeUnstyled,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"; //plus
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons/faThumbsUp"; //like
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart"; //love
import { faSmile } from "@fortawesome/free-regular-svg-icons/faSmile"; //haha
import { faFrown } from "@fortawesome/free-regular-svg-icons/faFrown"; //sad
import { faAngry } from "@fortawesome/free-regular-svg-icons/faAngry"; //angry

export default memo(function Emoji(props) {
  const options = ["like", "love", "haha", "sad", "angry"];
  const icons = [faThumbsUp, faHeart, faSmile, faFrown, faAngry];
  const coloring = ["#0d47a1", "#f06292", "#009688", "#37474f", "#dd2c00"];

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [emotion, setEmotion] = React.useState<string | any>(faPlus);

  const handleEmotion = (
    event: React.MouseEvent<HTMLElement>,
    newEmotion: string | any
  ) => {
    // console.log(newEmotion);
    if (newEmotion !== null) {
      setEmotion(newEmotion);
    } else {
      setEmotion(faPlus);
    }
  };

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  useEffect(() => {
    if (emotion !== faPlus) {
      //   console.log(emotion.iconName);
      icons.filter((icon: any): void => {
        if (icon.iconName === emotion.iconName) {
          //   return icons.indexOf(icon);
          return setBadgeColor(coloring[icons.indexOf(icon)]);
        }
      });
      //   setBadgeColor(coloring[Number(result)]);
    }
  }, [emotion, coloring, icons]);

  const [badgeColor, setBadgeColor] = React.useState("");
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const StyledBadge = styled(BadgeUnstyled)`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${badgeColor};
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    position: relative;
    display: inline-block;
    line-height: 1;

    & .MuiBadge-badge {
      z-index: auto;
      min-width: 20px;
      height: 20px;
      color: #fff;
      font-weight: 400;
      font-size: 12px;

      white-space: nowrap;
      text-align: center;
      background: #ff4d4f;
      border-radius: 10px;
      box-shadow: 0 0 0 1px #fff;
    }

    & .MuiBadge-dot {
      padding: 0;
      z-index: auto;
      min-width: 6px;
      width: 6px;
      height: 6px;
      background: #ff4d4f;
      border-radius: 100%;
      box-shadow: 0 0 0 1px #fff;
    }

    & .MuiBadge-anchorOriginTopRightCircular {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
  `;

  return (
    <React.Fragment>
      <IconButton
        aria-label="emoji"
        size="small"
        aria-describedby={id}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={emotion} color={badgeColor} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ToggleButtonGroup
          value={emotion}
          exclusive
          onChange={handleEmotion}
          aria-label="handleEmotion"
        >
          {options.map((option, index) => (
            <ToggleButton value={icons[index]} key={index} aria-label={option}>
              <StyledBadge
                overlap="circular"
                badgeContent={count}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <FontAwesomeIcon
                  key={option}
                  icon={icons[index]}
                  color={coloring[index]}
                />
              </StyledBadge>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Popover>
    </React.Fragment>
  );
});
