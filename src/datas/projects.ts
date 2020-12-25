type ProjectType = {
    id: number;
    type: 'Production' | 'Toy' | 'Others';
    title: string;
    idea: string;
    timespent: number;
    duration: string;
    stack: Array<string>;
    library: Array<string>;
    profit: string;
    lesson: string;
    code: null | string;
    livelink: null | string;
}

export const projects: Array<ProjectType> = [
    // {
    //     id: 0,
    //     type: 'Production',
    //     title: '',
    //     idea: '',
    //     timespent: 300,
    //     duration: '',
    //     stack: ['',],
    //     library: ['',],
    //     profit: '',
    //     lesson: '',
    //     code: '',
    //     livelink: '',
    // },
    {
        id: 0,
        type: 'Toy',
        title: 'Memoiz',
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        timespent: 300,
        duration: '2020. 3. - 2020. 5.',
        stack: ['',],
        library: ['',],
        profit: '120k View',
        lesson: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        code: '',
        livelink: '',
    },
    {
        id: 1,
        type: 'Production',
        title: 'BritTea',
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        timespent: 300,
        duration: '2020. 3. - 2020. 5.',
        stack: ['',],
        library: ['',],
        profit: '',
        lesson: '',
        code: '',
        livelink: '',
    },
    {
        id: 2,
        type: 'Production',
        title: 'Valog',
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        timespent: 300,
        duration: '2020. 3. - 2020. 5.',
        stack: ['',],
        library: ['',],
        profit: '',
        lesson: '',
        code: '',
        livelink: '',
    },
    {
        id: 3,
        type: 'Production',
        title: 'SelfBingo',
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        timespent: 300,
        duration: '2020. 3. - 2020. 5.',
        stack: ['',],
        library: ['',],
        profit: '',
        lesson: '',
        code: '',
        livelink: '',
    },
    {
        id: 4,
        type: 'Toy',
        title: 'Damwon Project',
        idea: "After learning asd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        timespent: 300,
        duration: '2020. 3. - 2020. 5.',
        stack: ['',],
        library: ['',],
        profit: '',
        lesson: '',
        code: '',
        livelink: '',
    },
]