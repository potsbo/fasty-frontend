import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import abcd, { Course, LessonData } from "./courses";
import Lesson from "./Lesson";

const courses = new Map<string, Course>([["abcd", abcd]]);

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CourseView = (_: {}) => {
  const { courseSlug } = useParams();
  const previewIdFromQuery = parseInt(useQuery().get("preview") || "", 10);
  const { path, url } = useRouteMatch();
  const [previewIdx, setPreviewIdx] = useState<number | undefined>(previewIdFromQuery || undefined);
  const history = useHistory();
  const course = courses.get(courseSlug);
  if (course === undefined) {
    // TODO: better 404
    return <div>404</div>;
  }
  const onClickBar = (idx: number) => {
    setPreviewIdx((current) => {
      if (current === idx) {
        return undefined;
      }
      return idx;
    });
  };

  const lessonList = course.lessons.map((l: LessonData, idx: number) => {
    // TODO: better link management
    const theme = { previewState: previewIdx === idx };
    return (
      <Li key={l.title}>
        <RoundBar
          theme={theme}
          onClick={() => {
            onClickBar(idx);
          }}
        >
          <FlexSpan>
            <Circle>{idx + 1}</Circle>
            {l.title}
            <RoundButton
              theme={theme}
              onClick={() => {
                history.push(`${url}/lessons/${idx + 1}`);
              }}
            >
              Start
            </RoundButton>
          </FlexSpan>
          <TaskPreview theme={theme}>
            {l.sentences.map((s: string, i: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`${s}${i}`} style={{ margin: "8px" }}>
                {s}
              </p>
            ))}
          </TaskPreview>
        </RoundBar>
      </Li>
    );
  });
  return (
    <Center>
      <div>
        <h2>{course.title}</h2>
        {/* {course.description && <p>{course.description}</p>} */}
      </div>

      <Switch>
        <Route exact path={path}>
          <Ul>{lessonList}</Ul>
        </Route>
        <Route exact path={`${path}/lessons`}>
          <Redirect to={url} />
        </Route>
        <Route path={`${path}/lessons/:lessonId`}>
          <Lesson course={course} />
        </Route>
      </Switch>
    </Center>
  );
};

export default CourseView;

// TODO: better font
const Center = styled.div`
  width: 960px;
  margin: auto;
  font-family: Helvetica;
`;

const Li = styled.li`
  list-style-type: none;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const FlexSpan = styled.span`
  display: flex;
  align-items: center;
`;

const bigger = 12;

const RoundBar = styled.span`
  box-sizing: border-box;
  display: block;

  height: ${(props) => (props.theme.previewState ? 300 : 48)}px;
  box-shadow: ${(props) => (props.theme.previewState ? "0px 0px 10px 4px #CCCCCC" : "none")};
  border-radius: 24px;

  padding: ${(props) => 6 + (props.theme.previewState ? bigger : 0)}px;

  margin-left: ${(props) => (props.theme.previewState ? -bigger : 0)}px;
  margin-right: ${(props) => (props.theme.previewState ? -bigger : 0)}px;
  margin-top: ${(props) => (props.theme.previewState ? 2 * bigger : 0)}px;
  margin-bottom: ${(props) => (props.theme.previewState ? 2 * bigger : 0)}px;
  color: black;

  align-items: start;
  text-decoration: none;
  transition: 0.2s;
  transition-timing-function: ease;

  &:hover {
    color: black;
    box-shadow: 0px 0px 10px 4px #dddddd;
  }

  &:focus {
    height: 300px;
  }
`;

const Circle = styled.div`
  box-sizing: border-box;
  display: flex;

  background-color: #00a2ff;
  color: white;
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 16px;
`;

const RoundButton = styled.button`
  box-sizing: border-box;
  opacity: ${(props) => (props.theme.previewState ? 100 : 0)}%;
  display: flex;

  background-color: #00a2ff;
  color: white;
  height: 36px;
  width: 72px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 18px;
  border: none;

  margin-left: auto;
  transition: 0.2s;
  transition-timing-function: ease;

  ${RoundBar}:hover & {
    opacity: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 10px 4px #dddddd;
  }
  &:focus {
    border: none;
  }
`;

const TaskPreview = styled.div`
  margin-top: 16px;
  margin-left: 48px;
  overflow: scroll;
  height: ${(props) => (props.theme.previewState ? 200 : 0)}px;
  transition: 0.2s;
  transition-timing-function: ease;
`;
