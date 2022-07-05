import { css } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardSection,
  Center,
  Container,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaGithub, FaHandPointDown, FaLink, FaPlay } from "react-icons/fa";
import { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import YouTube from "../components/YouTube";
import Gradient from "../components/Gradient";

// export const thisIsAnUnusedExport =
//   "this export only exists to disable fast refresh for this file";

const Home: NextPage = () => {
  const [imageStolen, setImageStolen] = useState(false);

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

        <Gradient>
          <Center
            css={css`
              height: 100%;
            `}
          >
            <SimpleGrid
              css={css`
                padding: 1rem;
                place-items: center;
              `}
              cols={3}
              spacing={"md"}
              breakpoints={[
                { maxWidth: 1100, cols: 2 },
                { maxWidth: 760, cols: 1 },
              ]}
            >
              <PortfolioCard
                links={[
                  {
                    href: "https://www.edudata.no/",
                    leftIcon: <FaLink />,
                    children: <>Visit EduData</>,
                  },
                ]}
                tools={[
                  { color: "blue", children: <>TypeScript</> },
                  { color: "pink", children: <>React</> },
                  { color: "dark", children: <>Next.js</> },
                  { color: "blue", children: <>Python</> },
                  { color: "indigo", children: <>Jupyter</> },
                ]}
                image="/images/edudata.jpg"
              >
                <Text weight={500}>EduData</Text>
                <Text size="sm">
                  Teaching material and subject related data.
                </Text>
              </PortfolioCard>
              <PortfolioCard
                links={[
                  {
                    href: "https://github.com/VidunderGunder/hello-twin",
                    leftIcon: <FaGithub />,
                    children: <>Hello Twin (Backend + MCU)</>,
                  },
                  {
                    href: "https://github.com/VidunderGunder/hello-twin-unity",
                    leftIcon: <FaGithub />,
                    children: <>Hello Twin (Unity)</>,
                  },
                ]}
                tools={[
                  { color: "grape", children: <>C++</> },
                  { color: "grape", children: <>C#</> },
                  { color: "blue", children: <>TypeScript</> },
                  { color: "pink", children: <>React</> },
                  { color: "dark", children: <>Next.js</> },
                  { color: "dark", children: <>Unity</> },
                  { color: "blue", children: <>Arduino</> },
                ]}
              >
                <Text weight={500}>Hello Digital Twin</Text>
                <YouTube
                  src="https://www.youtube.com/embed/S07OMZwGjOs"
                  aspectRatio={{
                    width: 16,
                    height: 8.495,
                  }}
                />
                <Text size="sm">
                  Syncing a real life Arduino with a simulated 3D one on the web
                  (Unity to Web using my{" "}
                  <a href="https://github.com/VidunderGunder/unext">
                    unext project
                  </a>
                  ).
                </Text>
              </PortfolioCard>
              <PortfolioCard
                links={[
                  {
                    href: "https://looplearner.vercel.app/",
                    leftIcon: <FaPlay />,
                    children: <>Try LoopLearner</>,
                  },
                ]}
                tools={[
                  { color: "blue", children: <>TypeScript</> },
                  { color: "pink", children: <>React</> },
                  { color: "dark", children: <>Next.js</> },
                ]}
                image="/images/looplearner.png"
              >
                <Text weight={500}>LoopLearner</Text>
                <Text size="sm">
                  Tool for learning dance and music. Not quite finished, but
                  kinda does the job in most cases.
                </Text>
              </PortfolioCard>
            </SimpleGrid>
          </Center>
        </Gradient>
      </motion.div>
    </>
  );
};

export default Home;
