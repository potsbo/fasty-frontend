export interface Course {
    title: string
    description?: string
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
        },
        {
            title: 'Lesson 2 Introducing E and T: Home row, Second fingers',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 3 Comprehensive: E, H, T, U',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 4 Introducing O and N: Home row, third fingers',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 5 Comprehensive, including O and N',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 6 Introducing A and S: Home row, fourth fingers',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 7 Comprehensive, including A and S',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 8 Introducing I and D: Index finger stretching in the home row',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 9 Comprehensive, including I and D (entire home row)',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 10 Introducing P and G: First fingers reaching up',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 11 Comprehensive, including P and G',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 12 Introducing . and C: Second fingers reaching up',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 13 Comprehensive, including . and C',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 14 Introducing , and R: Third fingers reaching up',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: 'Lesson 15 Comprehensive, including , and R',
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 16 Introducing ' and L: Fourth fingers reaching up",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 17 Comprehensive, including ' and L",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 18 Introducing Y and F: Index fingers stretching up",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 19 Comprehensive, including Y and F (full upper/home rows)",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 20 Introducing K and M: Index fingers reaching down",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 21 Comprehensive, including K and M",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 22 Introducing J and W: Second fingers reaching down",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 23 Comprehensive, including J and W",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 24 Introducing Q and V: Third fingers reaching down",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 25 Comprehensive, including Q and V",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 26 Introducing ; and Z: Fourth fingers reaching down",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 27 Comprehensive, including ; and Z",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 28 Introducing X and B: Index fingers stretching down",
            sentences: [
                'to be updated',
            ]
        },
        {
            title: "Lesson 29 Comprehensive, including X and B (This is it, folks!)",
            sentences: [
                'to be updated',
            ]
        },
    ]
}

export default abcd