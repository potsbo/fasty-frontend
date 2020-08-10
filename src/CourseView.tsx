import React from "react";
import abcd, { Course, LessonData } from "./courses"
import styled from "styled-components/macro";

import {
    Link,
    useParams,
    useRouteMatch,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Lesson from "./Lesson";

const courses = new Map<string, Course>([
    ["abcd", abcd]
])

const CourseView = (_: {}) => {
    const { courseSlug } = useParams();
    const { path, url } = useRouteMatch();
    const course = courses.get(courseSlug);
    if (course === undefined) {
        // TODO: better 404
        return <div>404</div>
    }

    const lessonList = course.lessons.map((l: LessonData, idx: number) => {
        // TODO: better link management
        return (
            <Li key={idx}>
                <Link to={`${url}/lessons/${idx + 1}`} style={{ textDecoration: 'none' }}>
                    <BlockSpan>
                        <Circle>
                            {idx + 1}
                        </Circle>
                        {l.title}
                    </BlockSpan>
                </Link>
            </Li>
        )
    })
    return (
        <Center>
            <div>
                <h2>{course.title}</h2>
                {course.description && <p>{course.description}</p>}
            </div>

            <Switch>
                <Route exact path={path}>
                    <Ul>
                        {lessonList}
                    </Ul>
                </Route>
                <Route exact path={`${path}/lessons`}>
                    <Redirect to={url} />
                </Route>
                <Route path={`${path}/lessons/:lessonId`}>
                    <Lesson course={course} />
                </Route>
            </Switch>
        </Center>
    )
}

export default CourseView

// TODO: better font
const Center = styled.div`
    width: 1280px;
    margin: auto;
    font-family: Helvetica;
`

const Li = styled.li`
    list-style-type:none;
`

const Ul = styled.ul`
    margin: 0;
    padding: 0;
`

const BlockSpan = styled.ul`
    box-sizing: border-box;
    display: flex;

    height: 48px;
    border-radius: 24px;

    padding: 8px;
    padding-left: 0px;
    color: black;

    align-items: center;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: black;
        box-shadow: 0px 0px 10px 4px #888888;
    }
`

const Circle = styled.div`
    box-sizing: border-box;
    display: flex;

    background-color: #00A2FF;
    color: white;
    height: 36px;
    width: 36px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 50%;
    margin-left: 6px;
    margin-right: 16px;
`