import { Icon, Flex } from "@chakra-ui/react";
import ExternalLink from "components/ExternalLink";
import { twitter } from "constants/urls";

const TwitterIcon = () => (
  <ExternalLink to={twitter} aria-label="Twitter Logo">
    <Flex
      bg="hsla(0,0%,100%,.08)"
      align="center"
      justify="center"
      borderRadius="6px"
      h="40px"
      w="40px"
    >
      <Icon width="22px" height="18px" viewBox="0 0 22 18" fill="none">
        <path
          d="M22 2.17713C21.1906 2.53646 20.3207 2.77846 19.4077 2.88755C20.3399 2.3293 21.0558 1.44471 21.3923 0.390547C20.5205 0.907547 19.5543 1.28338 18.5258 1.48596C17.7036 0.608714 16.5293 0.0605469 15.2313 0.0605469C12.3172 0.0605469 10.1759 2.77938 10.8341 5.6018C7.084 5.41388 3.75833 3.61721 1.53175 0.886464C0.34925 2.91505 0.9185 5.5688 2.92783 6.91263C2.189 6.8888 1.49233 6.68621 0.884583 6.34796C0.835083 8.43888 2.33383 10.395 4.5045 10.8305C3.86925 11.0028 3.1735 11.0431 2.46583 10.9075C3.03967 12.7005 4.70617 14.0049 6.6825 14.0415C4.785 15.5293 2.39433 16.1939 0 15.9115C1.99742 17.1921 4.37067 17.9392 6.919 17.9392C15.2992 17.9392 20.0338 10.8616 19.7477 4.51371C20.6296 3.87663 21.395 3.08188 22 2.17713Z"
          fill="white"
        />
      </Icon>
    </Flex>
  </ExternalLink>
);

export default TwitterIcon;
