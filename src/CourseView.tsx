import React from "react";
import abcd, { Course, LessonData } from "./courses"
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
            <li key={idx}>
                <Link to={`${url}/lessons/${idx + 1}`}>{l.title}</Link>
            </li>
        )
    })
    return (
        <div>
            <div>
                <h2>{course.title}</h2>
                {course.description && <p>{course.description}</p>}
            </div>

            <Switch>
                <Route exact path={path}>
                    <ul>
                        {lessonList}
                    </ul>
                </Route>
                <Route exact path={`${path}/lessons`}>
                    <Redirect to={url} />
                </Route>
                <Route path={`${path}/lessons/:lessonId`}>
                    <Lesson course={course} />
                </Route>
            </Switch>
        </div>
    )
}

export default CourseView