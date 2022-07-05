import { ComponentPropsWithoutRef, forwardRef, ReactNode, Ref } from "react";
import { motion } from "framer-motion";
import {
  Badge,
  Button,
  Card,
  DefaultMantineColor,
  Group,
  Image,
  Space,
} from "@mantine/core";
import { css } from "@emotion/react";

const PortfolioCard = forwardRef(function PortfolioCard(
  {
    children,
    links,
    tools,
    image,
    cardProps,
    ...props
  }: ComponentPropsWithoutRef<typeof motion.div> & {
    links?: {
      children?: ReactNode;
      href?: string;
      leftIcon?: ReactNode;
      buttonProps?: ComponentPropsWithoutRef<typeof Button>;
    }[];
    tools?: { children?: ReactNode; color?: DefaultMantineColor }[];
    image?: string;
    cardProps?: ComponentPropsWithoutRef<typeof Card>;
  },
  ref: Ref<HTMLDivElement> | undefined
) {
  return (
    <motion.div
      ref={ref}
      css={css`
        max-width: 100%;
        width: 350px;
        overflow: hidden;
        border-radius: 0.5rem;
      `}
      whileHover={{
        boxShadow: "0 0 0 4px rgba(0, 0, 0, 0.125)",
        transition: { duration: 0.15 },
      }}
      transition={{ duration: 0.175 }}
      {...props}
    >
      <Card p="lg" {...cardProps}>
        {image && (
          <Card.Section>
            <Image height={200} src={image} alt="LoopLearner" />
            <Space h="md" />
          </Card.Section>
        )}
        <Group direction="column" grow>
          {children}
          {links !== undefined && links?.length > 0 && (
            <Group direction="column" grow spacing={3}>
              {links?.map((link, index) => (
                <Button<"a">
                  key={index}
                  href={link.href}
                  leftIcon={link.leftIcon}
                  component="a"
                  fullWidth
                  color="pink"
                  {...link.buttonProps}
                >
                  {link.children}
                </Button>
              ))}
            </Group>
          )}
          {tools !== undefined && tools?.length > 0 && (
            <Group spacing={5} position="center">
              {tools?.map((tool, index) => (
                <Badge key={index} color={tool.color}>
                  {tool.children}
                </Badge>
              ))}
            </Group>
          )}
        </Group>
      </Card>
    </motion.div>
  );
});

export default PortfolioCard;
