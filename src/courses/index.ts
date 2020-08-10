interface Course {
    title: string
    lessons: LessonData[] // TODO: rename to Lesson after current `Lesson` component renamed to `LessonView`
}

export interface LessonData {
    title: string
    sentences: string[]
    scramble?: boolean
}

const abcd: Course = {
    title: 'A Basic Course in Dvorak',
    lessons: [
        {
            title: 'Lesson 1 Introducing U and H: Home row, Index fingers',
            sentences: [
                'uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh',
                'uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh',
                'uh uh uh uh',
                'hu hu hu hu',
                'huh huh huh huh',
                'uh huh uh huh uh huh uh huh',
                'h u uh hu uhh huh uhh',
                'h u uh hu uhh huh uhh',
            ]
        }
    ]
}

export default abcd