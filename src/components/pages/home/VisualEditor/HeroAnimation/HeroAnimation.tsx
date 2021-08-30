import React, { useState, useRef, useCallback, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import {
  Box,
  Text,
  Image,
  Flex,
  CircularProgress,
  chakra,
} from "@chakra-ui/react";
import MessageIcon from "./icons/Message";
import PushIcon from "./icons/Push";
import SMSIcon from "./icons/SMS";
import ChatIcon from "./icons/Chat";
import NextImage from "next/image";
import BannerSlideBgImage from "../../../../../../public/images/bannersliderBgNew@2x.png";

const ChakraSlider = chakra(Slider);

const channelImages = [
  {
    name: "Email",
    image: "/images/pages/home/hero/email.png",
    width: "506px",
    ml: { xl: "90px", "2xl": "100px" },
    mt: "20px",
  },
  {
    name: "SMS",
    image: "/images/pages/home/hero/sms.png",
    width: "302px",
    ml: { base: "170px", "2xl": "170px" },
    mt: "0px",
  },
  {
    name: "Push",
    image: "/images/pages/home/hero/push.png",
    width: "302px",
    ml: { base: "170px", "2xl": "170px" },
    mt: "0px",
  },
  {
    name: "Chat",
    image: "/images/pages/home/hero/chat.png",
    width: "544px",
    ml: { base: "70px", "2xl": "80px" },
    mt: "20px",
  },
];

const channelButtons = [
  { name: "Email", index: 0, icon: <MessageIcon /> },
  { name: "SMS", index: 1, icon: <SMSIcon /> },
  { name: "Push", index: 2, icon: <PushIcon /> },
  { name: "Chat", index: 3, icon: <ChatIcon /> },
];

const AUTOPLAY_SPEED = 3800;
const PROGRESS_TICK = 3;

const HeroAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const intervalRef: React.MutableRefObject<NodeJS.Timeout | null> =
    useRef(null);

  const startProgressBar = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const tick = () =>
      setProgress((progress) => {
        const nextProgress = progress + PROGRESS_TICK;

        if (nextProgress >= 100 && intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        return nextProgress;
      });

    setProgress(0);
    tick();

    intervalRef.current = setInterval(
      tick,
      (PROGRESS_TICK / 100) * AUTOPLAY_SPEED
    );
  }, []);

  useEffect(() => {
    startProgressBar();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const showSlideWithIndex = useCallback((index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
    startProgressBar();
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => showSlideWithIndex(next),
  };

  return (
    <Box
      maxWidth="1063px"
      mx="auto"
      w="100%"
      display={{ base: "none", xl: "block" }}
    >
      <Box backgroundSize="100% 100%" mx="auto">
        <Box position="absolute">
          <NextImage
            src={BannerSlideBgImage}
            priority
            width={1063}
            height={648}
          />
        </Box>
        <Box w="100%" h="648px" pt="19px">
          <Box w="calc(100% - 62px)" h="80%" ml="58px" borderRadius="16px">
            <Flex p="24px 44px 0 18px">
              <Box w="212px" p="0 0 0 20px" pt="82px" zIndex={300}>
                {channelButtons.map((button) => (
                  <Flex
                    h="38px"
                    w={"180px"}
                    mb={"12px"}
                    onClick={(e) => showSlideWithIndex(button.index)}
                    align="center"
                    justify="space-between"
                    borderRadius="8px"
                    p="0 14px"
                    color={
                      activeIndex === button.index
                        ? "white"
                        : "rgba(44,19,56,.6)"
                    }
                    cursor="pointer"
                    bg={
                      activeIndex == button.index
                        ? "linear-gradient(270deg,#9121c2,#ff5e5e)"
                        : "rgba(44,19,56,.03)"
                    }
                    transition="all .4s"
                    sx={{
                      ":hover": {
                        background: "linear-gradient(270deg,#9121c2,#ff5e5e)",
                        color: "white",
                      },
                    }}
                    key={button.name}
                  >
                    <Flex>
                      {button.icon}
                      <Text
                        fontSize="11px"
                        lineHeight="16px"
                        fontWeight="600"
                        pb={"0 14px"}
                        ml={3}
                      >
                        {button.index + 1}.{" "}
                        <span style={{ paddingLeft: "1px" }}>
                          {button.name}
                        </span>
                      </Text>
                    </Flex>
                    {activeIndex === button.index ? (
                      <CircularProgress
                        value={progress}
                        size="16px"
                        color="white"
                        trackColor="rgba(255, 255, 255, 0.16)"
                      />
                    ) : (
                      <></>
                    )}
                  </Flex>
                ))}
              </Box>
              <ChakraSlider
                ref={sliderRef}
                {...settings}
                width="calc(100% - 212px)"
                height="592px"
                pt="82px"
              >
                {channelImages.map((channel) => (
                  <Image
                    src={channel.image}
                    w={channel.width}
                    maxW={channel.width}
                    ml={channel.ml}
                    mt={channel.mt}
                    key={channel.name}
                  />
                ))}
              </ChakraSlider>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroAnimation;
