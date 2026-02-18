import * as React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { AspectRatio, Box, Image, ImageProps } from "@chakra-ui/react";

type ResponsiveYouTubeProps = {
  videoId: string;
  title?: string;
  playerVars?: YouTubeProps["opts"]["playerVars"];
};

export const ResponsiveYouTube: React.FC<ResponsiveYouTubeProps> = ({ videoId, title, playerVars }) => {
  return (
    <AspectRatio ratio={16 / 9} w="100%">
      <Box sx={{ "& iframe": { width: "100%", height: "100%" } }}>
        <YouTube
          videoId={videoId}
          title={title}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              rel: 0,
              ...playerVars,
            },
          }}
        />
      </Box>
    </AspectRatio>
  );
};

export const ResponsiveImage: React.FC<ImageProps> = (props) => {
  return <Image w="100%" h="auto" objectFit="cover" borderRadius="lg" {...props} />;
};
