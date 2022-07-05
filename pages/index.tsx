import { css } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaGithub, FaHandPointDown } from "react-icons/fa";
import { SiTypescript } from "react-icons/fa";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import ReactPlayer from "react-player";

// export const thisIsAnUnusedExport =
//   "this export only exists to disable fast refresh for this file";

const Home: NextPage = () => {
  const [imageStolen, setImageStolen] = useState(false);
  const viewport = useViewportSize();
  return (
    <>
      <Head>
        <title>Kristian Gunder Kramås</title>
        <meta name="description" content="Kristian Gunder Kramås' portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        css={css`
          display: grid;
          min-height: 100%;
          /* height: 100%; */
          grid-template-rows: auto 1fr;
        `}
      >
        <Center
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: calc(22px + 2rem) 0 2rem;
          `}
        >
          <motion.div
            animate={{
              y: -22,
            }}
            transition={{
              duration: 0.625,
              delay: 2.5,
            }}
          >
            <motion.div
              // slide and fade element in from the right
              initial={{ scale: 0.75, opacity: 0, y: 40 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.0125,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1, transition: { duration: 0.05 } }}
            >
              <Center>
                <Image
                  css={css`
                    max-width: 250px;
                  `}
                  src={
                    imageStolen
                      ? "/images/stealing.png"
                      : "/images/kristian.png"
                  }
                  alt="Kristian Gunder Kramås"
                  pb="lg"
                  draggable={false}
                  onDragStart={() => {
                    setImageStolen(true);
                  }}
                  onDragEnd={() => {
                    setImageStolen(false);
                  }}
                />
              </Center>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <Text
                align="center"
                variant="gradient"
                gradient={{ from: "#f24e56", to: "#d530a6", deg: 45 }}
              >
                <Title
                  css={css`
                    font-size: 2.125rem;
                  `}
                >
                  Hi, I&apos;m Kristian.
                </Title>
              </Text>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.725, y: 0 }}
              transition={{
                delay: 1,
                duration: 0.75,
                ease: "easeInOut",
              }}
            >
              <Text
                align="center"
                // variant="gradient"
                // gradient={{ from: "#f24e56", to: "#d530a6", deg: 45 }}
              >
                <Title
                  css={css`
                    font-size: 1.36rem;
                  `}
                >
                  I make things with tech.
                </Title>
              </Text>
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.725, y: 0 }}
            transition={{
              delay: 2.5,
              duration: 0.75,
              ease: "easeInOut",
            }}
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
            `}
          >
            <Text align="center" size="lg">
              Check &apos;em out below.
            </Text>
            <motion.div
              // bounce up and down
              animate={{ y: [1, 4] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaHandPointDown
                size={20}
                css={css`
                  margin-left: 0.25rem;
                `}
              />
            </motion.div>
          </motion.div>
        </Center>

        <motion.div
          // Moving gradient background
          initial={{
            backgroundSize: "300%",
            backgroundImage: "linear-gradient(-45deg, #ed4d60, #dd2d5f)",
            backgroundPositionX: "50%",
            backgroundPositionY: "50%",
          }}
          animate={{
            backgroundImage: [
              "linear-gradient(0deg, #ed4d60, #dd2d5f)",
              "linear-gradient(90deg, #ed554d, #dd2db1)",
              "linear-gradient(180deg, #db4771, #dd2d7c)",
              "linear-gradient(270deg, #ec4949, #d83592)",
              "linear-gradient(360deg, #ed4d60, #dd2d5f)",
            ],
            backgroundSize: ["125%", "175%", "150%", "125%"],
            backgroundPositionX: ["50%", "25%", "50%", "75%", "50%"],
            backgroundPositionY: ["50%", "75%", "50%", "25%", "50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        >
          <Center
            css={css`
              padding: 1rem 0;
              min-height: 100%;
            `}
          >
            <div
              css={css`
                max-width: 100%;
                width: 350px;
                overflow: hidden;
              `}
            >
              <Card p="lg">
                <Group direction="column" grow>
                  <Group position="apart">
                    <Text weight={500}>Hello Digital Twin</Text>
                  </Group>
                  <div
                    css={css`
                      position: relative;
                      padding-top: 56.25%;
                      border-radius: 0.5rem;
                      overflow: hidden;
                      width: 100%;
                    `}
                  >
                    <iframe
                      css={css`
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        border: none;
                      `}
                      src="https://www.youtube.com/embed/S07OMZwGjOs"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Syncing a real life Arduino with a simulated 3D one on the
                    web (Unity to Web using my{" "}
                    <a href="https://github.com/VidunderGunder/unext">
                      unext project
                    </a>
                    ).
                  </Text>
                  <Group direction="column" grow spacing={3}>
                    <Button<"a">
                      component="a"
                      href="https://github.com/VidunderGunder/hello-twin"
                      color="pink"
                      fullWidth
                      leftIcon={<FaGithub />}
                    >
                      Hello Twin (Backend + MCU)
                    </Button>
                    <Button<"a">
                      component="a"
                      href="https://github.com/VidunderGunder/hello-twin-unity"
                      color="pink"
                      fullWidth
                      leftIcon={<FaGithub />}
                    >
                      Hello Twin (Unity)
                    </Button>
                  </Group>
                  <Group spacing={5} position="center">
                    <Badge color="grape">C++</Badge>
                    <Badge color="grape">C#</Badge>
                    <Badge color="blue">TypeScript</Badge>
                    <Badge color="pink">React</Badge>
                    <Badge color="dark">Next.js</Badge>
                    <Badge color="dark">Unity</Badge>
                    <Badge color="blue">Arduino</Badge>
                  </Group>
                </Group>
              </Card>
            </div>
          </Center>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
