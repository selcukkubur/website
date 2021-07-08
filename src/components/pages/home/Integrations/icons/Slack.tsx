import { Icon } from "@chakra-ui/react";

const SlackIcon = ({ whiteFill }: { whiteFill?: boolean }) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="26px"
      height="27px"
      fill="none"
      viewBox="0 0 26 27"
    >
      <g clipPath="url(#clip0)">
        <path
          fill={whiteFill ? "#FFF" : "#36C5F0"}
          d="M9.563.646a2.593 2.593 0 1 0 .001 5.186h2.594V3.24A2.596 2.596 0 0 0 9.563.646c.001 0 .001 0 0 0zm0 6.916H2.648a2.594 2.594 0 0 0-.001 5.187h6.916a2.594 2.594 0 1 0 0-5.187z"
        />
        <path
          fill={whiteFill ? "#FFF" : "#2EB67D"}
          d="M25.99 10.155a2.594 2.594 0 0 0-5.188 0v2.594h2.594a2.594 2.594 0 0 0 2.594-2.594zm-6.916 0V3.239a2.594 2.594 0 0 0-5.187 0v6.916a2.594 2.594 0 1 0 5.187 0z"
        />
        <path
          fill={whiteFill ? "#FFF" : "#ECB22E"}
          d="M16.48 26.582a2.594 2.594 0 1 0 0-5.187h-2.594v2.593a2.595 2.595 0 0 0 2.594 2.594zm0-6.918h6.916a2.594 2.594 0 0 0 .001-5.187h-6.916a2.594 2.594 0 0 0-.001 5.187z"
        />
        <path
          fill={whiteFill ? "#FFF" : "#E01E5A"}
          d="M.054 17.071a2.594 2.594 0 0 0 5.188 0v-2.593H2.648a2.594 2.594 0 0 0-2.594 2.593zm6.916 0v6.916a2.594 2.594 0 0 0 5.187.001v-6.915a2.594 2.594 0 0 0-5.187-.002c0 .001 0 0 0 0z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0h25.936v25.936H0z"
            transform="translate(.054 .646)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default SlackIcon;
