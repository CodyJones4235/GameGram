import React from "react";
import "./Postlist.css";
import { Card, Paper } from "@mantine/core";

export const PostContent = () => {
  return (
    <>
      <div className="Post_Container">
        <Card shadow="sm" padding="lg" withBorder>
          <iframe
            className="Post_Content_Video"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          />
          <div className="Post_Content_Comment">
            <text className="Post_Content_Comment_Txt">Csgo Ace</text>
          </div>
          <div className="Post_Content_Title">
            <text className="Post_Content_Title_Txt">Csgo Ace</text>
          </div>
        </Card>
      </div>
    </>
  );
};
