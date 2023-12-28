import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { "id": 1, "name": "John", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 90 },
        { "id": 2, "name": "Emma", "mathMarks": 78, "physicsMarks": 95, "chemistryMarks": 88 },
        { "id": 3, "name": "Michael", "mathMarks": 92, "physicsMarks": 80, "chemistryMarks": 95 },
        { "id": 4, "name": "Sophia", "mathMarks": 68, "physicsMarks": 72, "chemistryMarks": 80 },
        { "id": 5, "name": "Daniel", "mathMarks": 95, "physicsMarks": 88, "chemistryMarks": 92 },
        { "id": 6, "name": "Olivia", "mathMarks": 80, "physicsMarks": 89, "chemistryMarks": 85 },
        { "id": 7, "name": "James", "mathMarks": 75, "physicsMarks": 70, "chemistryMarks": 78 },
        { "id": 8, "name": "Emily", "mathMarks": 88, "physicsMarks": 92, "chemistryMarks": 94 },
        { "id": 9, "name": "William", "mathMarks": 82, "physicsMarks": 75, "chemistryMarks": 68 },
        { "id": 10, "name": "Ava", "mathMarks": 90, "physicsMarks": 85, "chemistryMarks": 89 }
    ]

    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='green'></Line>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;