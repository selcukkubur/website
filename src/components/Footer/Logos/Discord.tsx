import { Icon, Flex } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import { discord } from "constants/urls";

const DiscordIcon = () => (
  <ExternalLink to={discord} aria-label="Discord Logo">
    <Flex
      bg="hsla(0,0%,100%,.08)"
      align="center"
      justify="center"
      borderRadius="6px"
      h="40px"
      w="40px"
    >
      <Icon viewBox="0 0 21 24" width="21px" height="24px">
        <path
          d="M8.32849 10.0679C7.64449 10.0679 7.10449 10.6679 7.10449 11.3999C7.10449 12.1319 7.65649 12.7319 8.32849 12.7319C9.01249 12.7319 9.55249 12.1319 9.55249 11.3999C9.56449 10.6679 9.01249 10.0679 8.32849 10.0679ZM12.7085 10.0679C12.0245 10.0679 11.4845 10.6679 11.4845 11.3999C11.4845 12.1319 12.0365 12.7319 12.7085 12.7319C13.3925 12.7319 13.9325 12.1319 13.9325 11.3999C13.9325 10.6679 13.3925 10.0679 12.7085 10.0679Z"
          fill="white"
        />
        <path
          d="M18.54 0H2.46C1.104 0 0 1.104 0 2.472V18.696C0 20.064 1.104 21.168 2.46 21.168H16.068L15.432 18.948L16.968 20.376L18.42 21.72L21 24V2.472C21 1.104 19.896 0 18.54 0ZM13.908 15.672C13.908 15.672 13.476 15.156 13.116 14.7C14.688 14.256 15.288 13.272 15.288 13.272C14.796 13.596 14.328 13.824 13.908 13.98C13.308 14.232 12.732 14.4 12.168 14.496C11.016 14.712 9.96 14.652 9.06 14.484C8.376 14.352 7.788 14.16 7.296 13.968C7.02 13.86 6.72 13.728 6.42 13.56C6.384 13.536 6.348 13.524 6.312 13.5C6.288 13.488 6.276 13.476 6.264 13.464C6.048 13.344 5.928 13.26 5.928 13.26C5.928 13.26 6.504 14.22 8.028 14.676C7.668 15.132 7.224 15.672 7.224 15.672C4.572 15.588 3.564 13.848 3.564 13.848C3.564 9.984 5.292 6.852 5.292 6.852C7.02 5.556 8.664 5.592 8.664 5.592L8.784 5.736C6.624 6.36 5.628 7.308 5.628 7.308C5.628 7.308 5.892 7.164 6.336 6.96C7.62 6.396 8.64 6.24 9.06 6.204C9.132 6.192 9.192 6.18 9.264 6.18C9.996 6.084 10.824 6.06 11.688 6.156C12.828 6.288 14.052 6.624 15.3 7.308C15.3 7.308 14.352 6.408 12.312 5.784L12.48 5.592C12.48 5.592 14.124 5.556 15.852 6.852C15.852 6.852 17.58 9.984 17.58 13.848C17.58 13.848 16.56 15.588 13.908 15.672Z"
          fill="white"
        />
      </Icon>
    </Flex>
  </ExternalLink>
);

export default DiscordIcon;
