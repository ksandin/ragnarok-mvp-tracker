import React from "react";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Typography from "@material-ui/core/Typography";
import MuiTimelineItem from "@material-ui/lab/TimelineItem";
import { SpawnTime } from "./SpawnTime";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { Hunt } from "./Hunt";
import { IconButton, Tooltip } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Row } from "./Row";
import { Column } from "./Column";

export type HuntTimelineItemProps = {
  hunt: Hunt;
  onEdit: (hunt: Hunt) => void;
  onDelete: (hunt: Hunt) => void;
};

export const HuntTimelineItem: React.FC<HuntTimelineItemProps> = ({
  hunt,
  onEdit,
  onDelete,
}) => (
  <MuiTimelineItem>
    <TimelineOppositeContent>
      <SpawnTime
        killTime={hunt.killTime}
        spawnTime={hunt.boss.spawnTime}
        spawnWindow={hunt.boss.spawnWindow}
      />
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot>
        <FastfoodIcon />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <PaddedPaper>
        <Row style={{ flex: 1 }}>
          <Column style={{ flex: 1 }}>
            <Typography variant="h6" component="h1">
              {hunt.boss.name}
            </Typography>
            <Typography>
              Every {hunt.boss.spawnTime}~
              {hunt.boss.spawnTime + hunt.boss.spawnWindow} minutes on{" "}
              {hunt.map}
            </Typography>
          </Column>
          <Column>
            <Tooltip title="Set kill time">
              <IconButton onClick={() => onEdit(hunt)}>
                <Edit />
              </IconButton>
            </Tooltip>
          </Column>
          <Column>
            <Tooltip title="Stop hunting">
              <IconButton onClick={() => onDelete(hunt)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Column>
        </Row>
      </PaddedPaper>
    </TimelineContent>
  </MuiTimelineItem>
);

const PaddedPaper = styled(Paper).attrs({ elevation: 3 })`
  padding: 6px 16px;
`;
